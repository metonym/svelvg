/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XOctagonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XOctagon extends SvelteComponentTyped<
  XOctagonProps,
  {},
  { default: {} }
> {}
