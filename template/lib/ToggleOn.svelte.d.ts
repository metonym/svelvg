/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToggleOnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ToggleOn extends SvelteComponentTyped<
  ToggleOnProps,
  {},
  { default: {} }
> {}
