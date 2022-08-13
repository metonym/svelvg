/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class X extends SvelteComponentTyped<
  XProps,
  {},
  { default: {} }
> {}
