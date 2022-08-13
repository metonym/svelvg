/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PCircle extends SvelteComponentTyped<
  PCircleProps,
  {},
  { default: {} }
> {}
