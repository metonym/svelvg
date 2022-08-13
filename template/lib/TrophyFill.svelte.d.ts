/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrophyFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TrophyFill extends SvelteComponentTyped<
  TrophyFillProps,
  {},
  { default: {} }
> {}
