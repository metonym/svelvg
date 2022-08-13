/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HddRackProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HddRack extends SvelteComponentTyped<
  HddRackProps,
  {},
  { default: {} }
> {}
