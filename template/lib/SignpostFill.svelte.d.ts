/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SignpostFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SignpostFill extends SvelteComponentTyped<
  SignpostFillProps,
  {},
  { default: {} }
> {}
