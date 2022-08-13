/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoomboxFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BoomboxFill extends SvelteComponentTyped<
  BoomboxFillProps,
  {},
  { default: {} }
> {}
