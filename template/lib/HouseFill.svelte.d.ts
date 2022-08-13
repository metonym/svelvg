/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HouseFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HouseFill extends SvelteComponentTyped<
  HouseFillProps,
  {},
  { default: {} }
> {}
