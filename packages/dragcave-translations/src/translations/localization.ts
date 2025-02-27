import { PageSectionAnchorKeyedMatches } from "../anchors";

export function localizeAnchoredNodes(
  matches: PageSectionAnchorKeyedMatches,
  localizedResources: Record<string, string | undefined>,
): void {
  for (const [key, match] of Object.entries(matches)) {
    const res = localizedResources[key];
    if (!match || res == null) continue;
    if (match.node instanceof HTMLElement) {
      match.node.innerText = res;
    }
  }
}
