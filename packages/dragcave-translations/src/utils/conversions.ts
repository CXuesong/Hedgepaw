import { Numbers } from "jscorlib";

export function parseBoolean(expr: string): boolean {
  switch (expr.toLowerCase()) {
    case "true":
    case "yes":
    case "1":
      return true;
    case "false":
    case "no":
    case "0":
      return false;
  }
  return Numbers.asSafeInteger(expr) !== 0;
}
