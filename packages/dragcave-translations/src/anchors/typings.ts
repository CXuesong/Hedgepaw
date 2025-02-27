export interface PageSectionAnchor {
  selector: string;
  innerText?: string;
}

export type PageSectionAnchorGroup = Record<string, PageSectionAnchor>;
