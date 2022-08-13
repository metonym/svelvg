/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PauseCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PauseCircle extends SvelteComponentTyped<
  PauseCircleProps,
  {},
  { default: {} }
> {}
