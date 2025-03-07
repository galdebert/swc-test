import { b } from "./b";
import { c } from "./c";

export function a(v1: string, v2: string): string {
  return b(v1, v2) + c(v1, v2);
}

console.log(a("1", "2"));
