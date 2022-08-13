/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoomboxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Boombox extends SvelteComponentTyped<
  BoomboxProps,
  {},
  { default: {} }
> {}
