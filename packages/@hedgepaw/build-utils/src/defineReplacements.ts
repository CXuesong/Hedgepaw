/* eslint-disable @typescript-eslint/no-explicit-any */
function flattenObject(obj: Record<string, any>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  function flattenInner(obj: Record<string, unknown>, path: string) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const flattenedKey = path ? (path + "." + key) : key;
        const value = obj[key];
        if (typeof value === "object" && value) {
          flattenInner(value as Record<string, unknown>, flattenedKey);
        } else {
          result[flattenedKey] = value;
        }
      }
    }
  }
  flattenInner(obj, "");
  return result;
}

function serializeRecordValues(records: Record<string, unknown>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in records) {
    if (Object.prototype.hasOwnProperty.call(records, key)) {
      result[key] = records[key] === undefined ? "undefined" : JSON.stringify(records[key]);
    }
  }
  return result;
}

export function asDefineReplacements(obj: Record<string, any>): Record<string, string> {
  return serializeRecordValues(flattenObject(obj));
}
