/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Clipboard extends SvelteComponentTyped<
  ClipboardProps,
  {},
  { default: {} }
> {}
