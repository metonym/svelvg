/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EggFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EggFill extends SvelteComponentTyped<
  EggFillProps,
  {},
  { default: {} }
> {}
