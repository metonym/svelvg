/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlugFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlugFill extends SvelteComponentTyped<
  PlugFillProps,
  {},
  { default: {} }
> {}
