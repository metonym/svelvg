/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlagFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FlagFill extends SvelteComponentTyped<
  FlagFillProps,
  {},
  { default: {} }
> {}
