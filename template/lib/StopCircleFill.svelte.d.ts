/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StopCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StopCircleFill extends SvelteComponentTyped<
  StopCircleFillProps,
  {},
  { default: {} }
> {}
