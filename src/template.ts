import { parse, walk } from "svelte/compiler";

export function templateSvelte(source: string, filename: string) {
  const ast = parse(source, { filename });

  let svg_attributes = "";
  let svg_children = "";

  walk(ast.html, {
    enter(node: any) {
      if (node.type === "Element" && node.name === "svg") {
        node.children.forEach((child: any) => {
          svg_children += source.slice(child.start, child.end);
        });

        node.attributes.forEach(({ name, value }: any) => {
          if (name === "class") {
            value[0].raw.split(" ").forEach((name: string) => {
              svg_attributes += ` class:${name}={true}`;
            });
          } else {
            svg_attributes += ` ${name}="${value[0].raw}"`;
          }
        });
      }
    },
  });

  return `<svg${svg_attributes} {...$$restProps}><slot />${svg_children.trim()}</svg>`;
}

export function templateTs(moduleName: string) {
  return `/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ${moduleName}Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class ${moduleName} extends SvelteComponentTyped<
  ${moduleName}Props,
  {},
  { default: {} }
> {}
`;
}