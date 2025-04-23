export interface PageSectionAnchor {
  selector: string;
  innerText?: string;
  // For now, we only support 1-level nesting.
  children?: PageSectionAnchorGroup<string>;
}

export type PageSectionAnchorGroup<TKey extends string = string> = Record<TKey, PageSectionAnchor>;
