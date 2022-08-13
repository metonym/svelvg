/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EggProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Egg extends SvelteComponentTyped<
  EggProps,
  {},
  { default: {} }
> {}
