/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XOctagonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XOctagonFill extends SvelteComponentTyped<
  XOctagonFillProps,
  {},
  { default: {} }
> {}
