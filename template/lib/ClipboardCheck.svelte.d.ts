/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardCheck extends SvelteComponentTyped<
  ClipboardCheckProps,
  {},
  { default: {} }
> {}
