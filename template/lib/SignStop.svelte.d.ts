/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SignStopProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SignStop extends SvelteComponentTyped<
  SignStopProps,
  {},
  { default: {} }
> {}
