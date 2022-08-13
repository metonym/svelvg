/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LungsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Lungs extends SvelteComponentTyped<
  LungsProps,
  {},
  { default: {} }
> {}
