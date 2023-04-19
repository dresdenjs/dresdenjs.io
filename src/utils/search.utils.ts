export type Query = string & {};
export type SearchResults = Map<Element, [RegExpMatchArray, Query][]>;
export type SearchResult = { hasResult: false } | { hasResult: true; combined: SearchResults };

export const SEARCH_ATTR = 'data-search';
export const SEARCH_TRIM_ATTR = 'data-search-trim';

export function resetSearch(within: Element): void {
  within.querySelectorAll(`[${SEARCH_ATTR}]`).forEach((searchable) => {
    searchable.innerHTML = searchable.getAttribute(SEARCH_ATTR) ?? '';
  });
}

export function doSearch(within: Element, queries: Query[]): SearchResult {
  const hasResult = new Set<Query>();
  const combined: SearchResults = new Map();
  const searchables = within.querySelectorAll(`[${SEARCH_ATTR}]`);

  // no searchable elements found
  if (searchables.length === 0) return { hasResult: false };

  // empty queries will lead to a reset
  if (queries.length < 1 || (queries.length === 1 && queries[0] === '')) {
    // reset to inital state
    resetSearch(within);
    return { hasResult: false };
  }

  // match searchables against queries
  searchables.forEach((searchable) => {
    // read the content to search in
    const haystack = searchable.getAttribute(SEARCH_ATTR) ?? '';
    searchable.innerHTML = haystack ?? '';
    queries.forEach((query) => {
      // find all matches for each query and store the results
      const matches = [...haystack.matchAll(new RegExp(query, 'gi'))];
      if (matches.length > 0) {
        // remember that we found something
        hasResult.add(query);
        // store the combined results
        const combinedResult = combined.get(searchable) ?? [];
        combined.set(searchable, [
          ...combinedResult,
          ...matches.map((match) => [match, query] as [RegExpMatchArray, Query]),
        ]);
      }
    });
  });

  return { hasResult: hasResult.size >= queries.length, combined };
}

export function prepareQueries(query: string): Query[] {
  return (
    query
      .trim()
      // split the query into individual words
      .split(/\s+/)
      // remove queries contained by another
      .reduce((acc, term) => {
        // don't handle empty terms
        if (term === '') return acc;
        // clean the term
        // https://stackoverflow.com/a/6969486/1146207
        term = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // term already in query
        if (acc.some((q) => q.includes(term))) return acc;
        // term contains another query
        if (acc.some((q) => term.includes(q))) {
          // remove the contained query
          acc = acc.filter((q) => !term.includes(q));
        }
        // add the term to the query
        return [...acc, term];
      }, [] as Query[])
  );
}
