import { templateSvelte, templateTs } from "../src/template";

test("templateSvelte", () => {
  [
    {
      name: "Element only",
      source: `<svg></svg>`,
      filename: "",
      classes: [],
    },
    {
      name: "With attributes and children",
      source: `<svg id="id" class="class"><title>Title</title></svg>`,
      filename: "",
      classes: [],
    },
    {
      name: "With classes",
      source: `<svg id="id" class="class"><title>Title</title></svg>`,
      filename: "",
      classes: ["my-class"],
    },
  ].forEach(({ source, filename, classes }) => {
    expect(templateSvelte(source, filename, { classes })).toMatchSnapshot();
  });
});

test("templateTs", () => {
  expect(templateTs("IconName")).toMatchSnapshot();
});
