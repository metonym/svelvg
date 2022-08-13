/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HouseHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HouseHeartFill extends SvelteComponentTyped<
  HouseHeartFillProps,
  {},
  { default: {} }
> {}
