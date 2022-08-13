/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BootstrapProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bootstrap extends SvelteComponentTyped<
  BootstrapProps,
  {},
  { default: {} }
> {}
