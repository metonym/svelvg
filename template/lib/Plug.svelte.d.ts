/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlugProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Plug extends SvelteComponentTyped<
  PlugProps,
  {},
  { default: {} }
> {}
