/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MoonStarsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MoonStars extends SvelteComponentTyped<
  MoonStarsProps,
  {},
  { default: {} }
> {}
