/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagHeartFill extends SvelteComponentTyped<
  BagHeartFillProps,
  {},
  { default: {} }
> {}
