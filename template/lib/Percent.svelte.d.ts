/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PercentProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Percent extends SvelteComponentTyped<
  PercentProps,
  {},
  { default: {} }
> {}
