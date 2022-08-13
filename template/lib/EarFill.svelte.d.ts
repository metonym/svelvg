/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EarFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EarFill extends SvelteComponentTyped<
  EarFillProps,
  {},
  { default: {} }
> {}
