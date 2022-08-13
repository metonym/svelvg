/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarkdownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Markdown extends SvelteComponentTyped<
  MarkdownProps,
  {},
  { default: {} }
> {}
