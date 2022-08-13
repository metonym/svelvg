/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ForwardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Forward extends SvelteComponentTyped<
  ForwardProps,
  {},
  { default: {} }
> {}
