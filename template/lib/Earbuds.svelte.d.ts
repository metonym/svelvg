/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EarbudsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Earbuds extends SvelteComponentTyped<
  EarbudsProps,
  {},
  { default: {} }
> {}
