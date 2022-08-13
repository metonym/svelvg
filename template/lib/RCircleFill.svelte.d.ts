/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RCircleFill extends SvelteComponentTyped<
  RCircleFillProps,
  {},
  { default: {} }
> {}
