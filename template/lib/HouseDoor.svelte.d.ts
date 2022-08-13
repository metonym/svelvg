/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HouseDoorProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HouseDoor extends SvelteComponentTyped<
  HouseDoorProps,
  {},
  { default: {} }
> {}
