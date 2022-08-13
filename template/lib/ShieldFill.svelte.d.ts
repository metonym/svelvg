/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShieldFill extends SvelteComponentTyped<
  ShieldFillProps,
  {},
  { default: {} }
> {}
