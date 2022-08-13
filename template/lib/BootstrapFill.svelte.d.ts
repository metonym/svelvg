/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BootstrapFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BootstrapFill extends SvelteComponentTyped<
  BootstrapFillProps,
  {},
  { default: {} }
> {}
