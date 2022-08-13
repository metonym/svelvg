/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EggFriedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EggFried extends SvelteComponentTyped<
  EggFriedProps,
  {},
  { default: {} }
> {}
