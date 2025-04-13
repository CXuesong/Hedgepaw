export interface PageSectionAnchor {
  selector: string;
  innerText?: string;
}

export type PageSectionAnchorGroup<TKey extends string = string> = Record<TKey, PageSectionAnchor>;
