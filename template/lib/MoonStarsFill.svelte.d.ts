/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MoonStarsFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MoonStarsFill extends SvelteComponentTyped<
  MoonStarsFillProps,
  {},
  { default: {} }
> {}
