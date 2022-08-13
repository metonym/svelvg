/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BullseyeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bullseye extends SvelteComponentTyped<
  BullseyeProps,
  {},
  { default: {} }
> {}
