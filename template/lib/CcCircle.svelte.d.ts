/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CcCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CcCircle extends SvelteComponentTyped<
  CcCircleProps,
  {},
  { default: {} }
> {}
