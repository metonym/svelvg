/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaperclipProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Paperclip extends SvelteComponentTyped<
  PaperclipProps,
  {},
  { default: {} }
> {}
