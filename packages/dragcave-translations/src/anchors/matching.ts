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
  if (matches.length > 0) return undefined;
  return {
    node: matches[0] as HTMLElement,
  };
}

export type PageSectionAnchorGroupMatch = Record<string, PageSectionAnchorMatch | undefined>;

export function matchAnchorGroup(group: PageSectionAnchorGroup): PageSectionAnchorGroupMatch {
  const result: PageSectionAnchorGroupMatch = {};
  for (const [key, anchor] of Object.entries(group)) {
    result[key] = tryMatchAnchor(anchor);
  }
  return result;
}
