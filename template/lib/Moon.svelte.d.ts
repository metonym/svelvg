/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MoonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Moon extends SvelteComponentTyped<
  MoonProps,
  {},
  { default: {} }
> {}
