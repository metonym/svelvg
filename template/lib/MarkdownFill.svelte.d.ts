/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarkdownFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MarkdownFill extends SvelteComponentTyped<
  MarkdownFillProps,
  {},
  { default: {} }
> {}
