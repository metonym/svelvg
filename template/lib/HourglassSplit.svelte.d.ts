/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HourglassSplitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HourglassSplit extends SvelteComponentTyped<
  HourglassSplitProps,
  {},
  { default: {} }
> {}
