/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SignYieldProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SignYield extends SvelteComponentTyped<
  SignYieldProps,
  {},
  { default: {} }
> {}
