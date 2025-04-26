import { Errors, Strings } from "jscorlib";
import { PageSectionAnchorKeyedMatches } from "../anchors";

export function localizeAnchoredNodes(
  matches: PageSectionAnchorKeyedMatches,
  localizedResources: Record<string, string | undefined>,
): void {
  for (const [key, match] of Object.entries(matches)) {
    const localizationExpr = localizedResources[key];
    // No match or no resource, skip.
    if (!match || localizationExpr == null) continue;

    const parsedExpr = parseLocalizationExpression(localizationExpr, key);

    // Let's rock.
    if (match.node instanceof HTMLElement) {
      match.node.replaceChildren(); // Clear existing content first.

      const fragment = document.createDocumentFragment();
      for (const segment of parsedExpr) {
        switch (segment.type) {
          case "text":
            fragment.appendChild(document.createTextNode(segment.text));
            break;
          case "child": {
            const child = match.children?.[segment.key];

            if (child) {
              const { node } = child;
              if (segment.text != null && node instanceof HTMLElement) {
                node.innerText = segment.text;
              }
              fragment.appendChild(node);
            } else {
              const message = `DCT: child ${segment.key} not found in match ${key}`;
              const placeholder = document.createElement("span");
              placeholder.className = "dct-localization-missing-child";
              placeholder.innerText = `[${segment.key}|${segment.text}]`;
              placeholder.title = message;
              console.warn(message, placeholder);
              fragment.appendChild(placeholder);
            }

            break;
          }
        }
      }

      match.node.replaceChildren(fragment);
    }
  }
}

interface LocalizationTextSegment {
  type: "text";
  text: string;
}

interface LocalizationChildSegment {
  type: "child";
  key: string;
  text?: string;
}

type LocalizationSegment =
  | LocalizationTextSegment
  | LocalizationChildSegment
  ;

function parseLocalizationExpression(expr: string, key: string): LocalizationSegment[] {
  const segments: LocalizationSegment[] = [];
  const parser = new Strings.StringTokenParser(expr);
  while (!parser.isEof) {
    const segment = parseRootSegment();
    if (!segment)
      throw new Errors.FormatError(`Invalid localization expression "${key}" at position: ${parser.position}`);
    segments.push(segment);
  }

  return segments;

  function parseRootSegment(): LocalizationSegment | undefined {
    return parseChildPlaceholder()
      ?? parseTextSegment();
  }

  function parseChildPlaceholder(): LocalizationChildSegment | undefined {
    parser.pushState();
    if (!parser.consumeString("{C|")) return parser.popState(), undefined;

    const childKey = parser.consumeRegExp(/[^|}]+/y)?.[0];
    if (childKey == null) return parser.popState(), undefined;

    let childText: string | undefined;
    if (parser.consumeString("|")) {
      childText = parser.consumeRegExp(/[^|}]*/y)?.[0];
    }
    // TODO extensibility
    if (!parser.consumeString("}")) return parser.popState(), undefined;
    parser.acceptState();
    return {
      type: "child",
      key: childKey,
      text: childText,
    };
  }

  function parseTextSegment(): LocalizationTextSegment | undefined {
    const match = parser.consumeRegExp(/[^{]+/y);
    if (match) return { type: "text", text: match[0] };
    return undefined;
  }
}
