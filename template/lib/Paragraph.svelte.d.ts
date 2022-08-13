/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ParagraphProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Paragraph extends SvelteComponentTyped<
  ParagraphProps,
  {},
  { default: {} }
> {}
