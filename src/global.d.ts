declare module "estree-walker" {
  import type { Element } from "svelte/types/compiler/interfaces";

  export function walk(
    ast: Ast,
    options: {
      enter: (node: Element, parentNode: Element) => void;
    },
  ): void;
}
