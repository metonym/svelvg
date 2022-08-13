/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GearFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GearFill extends SvelteComponentTyped<
  GearFillProps,
  {},
  { default: {} }
> {}
