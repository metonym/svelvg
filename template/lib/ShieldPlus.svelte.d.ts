/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShieldPlus extends SvelteComponentTyped<
  ShieldPlusProps,
  {},
  { default: {} }
> {}
