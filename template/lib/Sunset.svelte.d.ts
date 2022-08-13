/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunsetProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Sunset extends SvelteComponentTyped<
  SunsetProps,
  {},
  { default: {} }
> {}
