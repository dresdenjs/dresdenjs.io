import { SEARCH_ATTR, SEARCH_TRIM_ATTR, type SearchResults } from './search.utils';

export type Highlighter = (text: string, query: string) => string;

export function highlightMatches(results: SearchResults, highlight: Highlighter = (t) => t) {
  results.forEach((result, searchable) => {
    // sort the combined result by match indices ascending
    const highlights = result.sort(([a], [b]) => a.index! - b.index!);

    // highlight all matches, but from the end
    let highlighted = highlights.reduceRight((acc, [{ 0: text, index = 0 }, query]) => {
      const before = acc.slice(0, index);
      const after = acc.slice(index + text.length);
      return `${before}${highlight(text, query)}${after}`;
    }, searchable.getAttribute(SEARCH_ATTR) ?? '');

    // remove the leading contents before the first match
    if (searchable.hasAttribute(SEARCH_TRIM_ATTR)) {
      // optionally, the leading trim can be adjusted
      const offset = Number(searchable.getAttribute(SEARCH_TRIM_ATTR) ?? 0);
      // get the first match
      let [{ index: firstResult = 0 }] = highlights[0]!;
      // make sure we don't trim too much
      firstResult = Math.max(0, firstResult - offset);
      // add a leading ellipsis if we trimmed something
      highlighted = `${firstResult > 0 ? '...' : ''}${highlighted.slice(firstResult)}`;
    }

    // set the highlighted content
    searchable.innerHTML = highlighted;
  });
}
