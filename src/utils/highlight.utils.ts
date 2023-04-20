import { SEARCH_ATTR, SEARCH_TRIM_ATTR, type SearchResults, type QueryMatches } from './search.utils';

export type Token = { index: number; text: string; isMatch: boolean };
export type Highlighter = (text: string, query: string) => string;

export function tokenize(content: string, matches: QueryMatches[]): Token[] {
  return (
    matches
      // sort the combined result by match indices ascending
      .sort(([a], [b]) => a.index! - b.index!)
      // build tokens of matches and text around matches
      .reduce((acc, [{ 0: text, index = 0 }], currentIndex) => {
        // get the previous token
        const prev = acc[acc.length - 1];
        let prevEnd = 0;

        // check if there is a previous token and improve end
        if (prev !== undefined) {
          prevEnd = prev.index + prev.text.length;
        }

        // check if the previous match overlaps with the current match
        if (prev && prevEnd >= index) {
          // extend the previous match (and align the previous end again)
          prev.text = `${prev.text.slice(0, index - prevEnd)}${text}`;
          prevEnd = prev.index + prev.text.length;
          acc[acc.length - 1] = prev;
        } else {
          // check if there is a gap between the previous token and the current match
          if (prevEnd < index) {
            // add the gap as text
            const text = content.slice(prevEnd, index);
            acc.push({ text, index: prevEnd, isMatch: false });
          }

          // add the match itself
          acc.push({ text, index, isMatch: true });
        }

        // add trailing text if there is any at the last match
        const lastHandledIndex = index + text.length;
        if (currentIndex === matches.length - 1 && lastHandledIndex < content.length) {
          const trailing = content.slice(lastHandledIndex);
          acc.push({ text: trailing, index: lastHandledIndex, isMatch: false });
        }

        // return result
        return acc;
      }, [] as Token[])
  );
}

export function highlightMatches(results: SearchResults, highlight: Highlighter = (t) => t) {
  results.forEach((matches, searchable) => {
    // prepare highlights
    const content = searchable.getAttribute(SEARCH_ATTR) ?? '';
    let tokens = tokenize(content, matches);

    // trim leading text to first match if requested
    if (searchable.hasAttribute(SEARCH_TRIM_ATTR)) {
      // optionally, the leading trim can be adjusted
      const offset = Number(searchable.getAttribute(SEARCH_TRIM_ATTR) ?? 5);
      // get index of first match
      const firstMatchIndex = tokens.findIndex((token) => token.isMatch);
      if (firstMatchIndex < 1) return;
      // get first match and trim leading text
      const before = tokens[firstMatchIndex - 1]!;
      const text = offset > before.text.length ? before.text : `...${before.text.slice(-offset)}`;
      // now the indices in the tokens array are off!
      tokens = [{ ...before, text }, ...tokens.slice(firstMatchIndex)];
    }

    // set the highlighted content
    searchable.innerHTML = tokens.reduce(
      (acc, { text, isMatch }) => `${acc}${isMatch ? highlight(text, '') : text}`,
      ''
    );
  });
}
