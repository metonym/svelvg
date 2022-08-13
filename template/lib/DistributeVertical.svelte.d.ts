/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DistributeVerticalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DistributeVertical extends SvelteComponentTyped<
  DistributeVerticalProps,
  {},
  { default: {} }
> {}
