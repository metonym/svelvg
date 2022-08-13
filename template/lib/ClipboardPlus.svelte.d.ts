/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardPlus extends SvelteComponentTyped<
  ClipboardPlusProps,
  {},
  { default: {} }
> {}
