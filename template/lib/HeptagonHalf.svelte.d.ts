/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeptagonHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeptagonHalf extends SvelteComponentTyped<
  HeptagonHalfProps,
  {},
  { default: {} }
> {}
