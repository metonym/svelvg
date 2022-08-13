/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XCircle extends SvelteComponentTyped<
  XCircleProps,
  {},
  { default: {} }
> {}
