/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HouseDoorFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HouseDoorFill extends SvelteComponentTyped<
  HouseDoorFillProps,
  {},
  { default: {} }
> {}
