/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardDataProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardData extends SvelteComponentTyped<
  ClipboardDataProps,
  {},
  { default: {} }
> {}
