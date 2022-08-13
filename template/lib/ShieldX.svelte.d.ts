/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShieldX extends SvelteComponentTyped<
  ShieldXProps,
  {},
  { default: {} }
> {}
