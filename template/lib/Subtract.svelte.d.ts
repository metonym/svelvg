/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SubtractProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Subtract extends SvelteComponentTyped<
  SubtractProps,
  {},
  { default: {} }
> {}
