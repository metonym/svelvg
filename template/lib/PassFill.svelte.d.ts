/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PassFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PassFill extends SvelteComponentTyped<
  PassFillProps,
  {},
  { default: {} }
> {}
