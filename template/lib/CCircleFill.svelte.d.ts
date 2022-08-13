/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CCircleFill extends SvelteComponentTyped<
  CCircleFillProps,
  {},
  { default: {} }
> {}
