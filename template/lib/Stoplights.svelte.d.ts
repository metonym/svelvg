/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StoplightsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Stoplights extends SvelteComponentTyped<
  StoplightsProps,
  {},
  { default: {} }
> {}
