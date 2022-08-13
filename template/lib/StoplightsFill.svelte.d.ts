/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StoplightsFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StoplightsFill extends SvelteComponentTyped<
  StoplightsFillProps,
  {},
  { default: {} }
> {}
