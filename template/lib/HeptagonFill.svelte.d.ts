/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeptagonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeptagonFill extends SvelteComponentTyped<
  HeptagonFillProps,
  {},
  { default: {} }
> {}
