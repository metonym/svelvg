/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DashCircle extends SvelteComponentTyped<
  DashCircleProps,
  {},
  { default: {} }
> {}
