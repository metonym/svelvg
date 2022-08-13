/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardDataFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardDataFill extends SvelteComponentTyped<
  ClipboardDataFillProps,
  {},
  { default: {} }
> {}
