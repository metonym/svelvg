/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CcCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CcCircleFill extends SvelteComponentTyped<
  CcCircleFillProps,
  {},
  { default: {} }
> {}
