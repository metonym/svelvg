import { parse, walk } from "svelte/compiler";

interface Position {
  start: number;
  end: number;
}

interface NodeElement extends Position {
  type: "Element";
  name: string;
  children: Position[];
  attributes: {
    name: string;
    value: { raw: any }[];
  }[];
}

export const templateSvelte = (
  source: string,
  filename: string,
  { classes }: { classes: string[] }
) => {
  const ast = parse(source, { filename });

  let svg_attributes = "";
  let svg_children = "";

  classes.forEach((name) => (svg_attributes += ` class:${name}={true}`));

  walk(ast.html, {
    enter(node: NodeElement) {
      if (node.type === "Element" && node.name === "svg") {
        node.children.forEach((child) => {
          svg_children += source.slice(child.start, child.end);
        });

        node.attributes.forEach(({ name, value }) => {
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
};

export const templateTs = (
  moduleName: string
) => `/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ${moduleName}Props
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ${moduleName} extends SvelteComponentTyped<
  ${moduleName}Props,
  {},
  { default: {} }
> {}
`;
