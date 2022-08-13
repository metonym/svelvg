/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardMinusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardMinus extends SvelteComponentTyped<
  ClipboardMinusProps,
  {},
  { default: {} }
> {}
