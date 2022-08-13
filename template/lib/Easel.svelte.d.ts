/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EaselProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Easel extends SvelteComponentTyped<
  EaselProps,
  {},
  { default: {} }
> {}
