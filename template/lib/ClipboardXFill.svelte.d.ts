/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardXFill extends SvelteComponentTyped<
  ClipboardXFillProps,
  {},
  { default: {} }
> {}
