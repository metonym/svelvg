/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagDashFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagDashFill extends SvelteComponentTyped<
  BagDashFillProps,
  {},
  { default: {} }
> {}
