/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToggleOffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ToggleOff extends SvelteComponentTyped<
  ToggleOffProps,
  {},
  { default: {} }
> {}
