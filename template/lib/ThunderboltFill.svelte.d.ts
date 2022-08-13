/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThunderboltFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThunderboltFill extends SvelteComponentTyped<
  ThunderboltFillProps,
  {},
  { default: {} }
> {}
