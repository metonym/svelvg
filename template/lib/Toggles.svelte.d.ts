/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TogglesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Toggles extends SvelteComponentTyped<
  TogglesProps,
  {},
  { default: {} }
> {}
