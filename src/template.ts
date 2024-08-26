import { parse } from "svelte/compiler";
import { walk } from "estree-walker";

export const templateSvelte = (
  source: string,
  filename: string,
  { classes }: { classes: string[] },
) => {
  const ast = parse(source, { filename });

  let svg_attributes = "";
  let svg_children = "";

  classes.forEach((name) => (svg_attributes += ` class:${name}={true}`));

  walk(ast, {
    enter(node) {
      if (node.type === "Element" && node.name === "svg") {
        node.children?.forEach((child) => {
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

export const templateTs = (moduleName: string) =>
  `export { ${moduleName} as default } from "./";\n`;
