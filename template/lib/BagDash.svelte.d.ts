/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagDash extends SvelteComponentTyped<
  BagDashProps,
  {},
  { default: {} }
> {}
