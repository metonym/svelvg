/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SignpostProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Signpost extends SvelteComponentTyped<
  SignpostProps,
  {},
  { default: {} }
> {}
