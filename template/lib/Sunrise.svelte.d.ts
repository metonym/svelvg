/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunriseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Sunrise extends SvelteComponentTyped<
  SunriseProps,
  {},
  { default: {} }
> {}
