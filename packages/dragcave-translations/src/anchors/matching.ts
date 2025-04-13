import { PageSectionAnchor, PageSectionAnchorGroup } from "./typings";

export interface PageSectionAnchorMatch {
  node: HTMLElement | Text;
}

export function tryMatchAnchor(anchor: PageSectionAnchor): PageSectionAnchorMatch | undefined {
  const matches = document.querySelectorAll(anchor.selector);
  if (!matches.length) return undefined;
  if (anchor.innerText != null) {
    for (const node of matches) {
      if (node instanceof HTMLElement && node.innerText.trim() === anchor.innerText) {
        // For now, we are not performing fuzzy match
        return {
          node,
        };
      }
    }
    return undefined;
  }
  // For now, we are not allowing ambiguous match.
  if (matches.length > 0) return undefined;
  return {
    node: matches[0] as HTMLElement,
  };
}

export type PageSectionAnchorKeyedMatches<TKey extends string = string> = Record<TKey, PageSectionAnchorMatch | undefined>;

export function tryMatchAnchors(group: PageSectionAnchorGroup): PageSectionAnchorKeyedMatches;
export function tryMatchAnchors<TKey extends string>(group: PageSectionAnchorGroup<TKey>): PageSectionAnchorKeyedMatches<TKey>;
export function tryMatchAnchors(group: PageSectionAnchorGroup): PageSectionAnchorKeyedMatches {
  const result: PageSectionAnchorKeyedMatches = {};
  for (const [key, anchor] of Object.entries<PageSectionAnchor>(group)) {
    result[key] = tryMatchAnchor(anchor);
  }
  return result;
}
