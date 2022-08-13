/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RewindFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RewindFill extends SvelteComponentTyped<
  RewindFillProps,
  {},
  { default: {} }
> {}
