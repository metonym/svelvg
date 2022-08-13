/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextParagraphProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TextParagraph extends SvelteComponentTyped<
  TextParagraphProps,
  {},
  { default: {} }
> {}
