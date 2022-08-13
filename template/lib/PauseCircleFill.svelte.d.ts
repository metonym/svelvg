/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PauseCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PauseCircleFill extends SvelteComponentTyped<
  PauseCircleFillProps,
  {},
  { default: {} }
> {}
