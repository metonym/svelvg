/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OptionProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Option extends SvelteComponentTyped<
  OptionProps,
  {},
  { default: {} }
> {}
