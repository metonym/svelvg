/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardFill extends SvelteComponentTyped<
  ClipboardFillProps,
  {},
  { default: {} }
> {}
