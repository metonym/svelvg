/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrophyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Trophy extends SvelteComponentTyped<
  TrophyProps,
  {},
  { default: {} }
> {}
