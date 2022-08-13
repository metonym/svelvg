/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MortarboardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MortarboardFill extends SvelteComponentTyped<
  MortarboardFillProps,
  {},
  { default: {} }
> {}
