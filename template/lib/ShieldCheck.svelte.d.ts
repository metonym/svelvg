/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShieldCheck extends SvelteComponentTyped<
  ShieldCheckProps,
  {},
  { default: {} }
> {}
