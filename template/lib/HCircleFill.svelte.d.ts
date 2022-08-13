/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HCircleFill extends SvelteComponentTyped<
  HCircleFillProps,
  {},
  { default: {} }
> {}
