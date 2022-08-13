/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CircleFill extends SvelteComponentTyped<
  CircleFillProps,
  {},
  { default: {} }
> {}
