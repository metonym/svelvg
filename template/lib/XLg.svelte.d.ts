/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XLgProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XLg extends SvelteComponentTyped<
  XLgProps,
  {},
  { default: {} }
> {}
