/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PauseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pause extends SvelteComponentTyped<
  PauseProps,
  {},
  { default: {} }
> {}
