/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ForwardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ForwardFill extends SvelteComponentTyped<
  ForwardFillProps,
  {},
  { default: {} }
> {}
