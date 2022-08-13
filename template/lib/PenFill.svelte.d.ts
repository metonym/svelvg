/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PenFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PenFill extends SvelteComponentTyped<
  PenFillProps,
  {},
  { default: {} }
> {}
