import { PageSectionAnchor, PageSectionAnchorGroup } from "./typings";

export interface PageSectionAnchorMatchOptions {
  container?: Element;
}

export interface PageSectionAnchorMatch {
  node: HTMLElement | Text;
  children?: Record<string, PageSectionAnchorMatch | undefined>;
}

export function tryMatchAnchor(anchor: PageSectionAnchor, options?: PageSectionAnchorMatchOptions): PageSectionAnchorMatch | undefined {
  const container = options?.container ?? document;
  const matches = container.querySelectorAll(anchor.selector);
  if (!matches.length) return undefined;
  const node = (() => {
    if (anchor.innerText != null) {
      for (const node of matches) {
        if (node instanceof HTMLElement && node.innerText.trim() === anchor.innerText) {
          // For now, we are not performing fuzzy match
          return node;
        }
      }
      return undefined;
    }
    // For now, we are not allowing ambiguous match.
    if (matches.length > 0) return undefined;
    return matches[0] as HTMLElement;
  })();
  if (!node) return undefined;
  const children = anchor.children && (() => {
    // match children
    const children: Record<string, PageSectionAnchorMatch | undefined> = {};
    for (const [key, child] of Object.entries(anchor.children)) {
      const match = tryMatchAnchor(child, options);
      if (match) {
        children[key] = match;
      }
    }
    return children;
  })();
  return {
    node,
    children,
  };
}

export type PageSectionAnchorKeyedMatches<TKey extends string = string> = Record<TKey, PageSectionAnchorMatch | undefined>;

export function tryMatchAnchors(
  group: PageSectionAnchorGroup,
  options?: PageSectionAnchorMatchOptions,
): PageSectionAnchorKeyedMatches;
export function tryMatchAnchors<TKey extends string>(
  group: PageSectionAnchorGroup<TKey>,
  options?: PageSectionAnchorMatchOptions,
): PageSectionAnchorKeyedMatches<TKey>;
export function tryMatchAnchors(
  group: PageSectionAnchorGroup,
  options?: PageSectionAnchorMatchOptions,
): PageSectionAnchorKeyedMatches {
  const result: PageSectionAnchorKeyedMatches = {};
  for (const [key, anchor] of Object.entries<PageSectionAnchor>(group)) {
    result[key] = tryMatchAnchor(anchor, options);
  }
  return result;
}
