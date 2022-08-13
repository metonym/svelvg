/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArrowsExpandProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ArrowsExpand extends SvelteComponentTyped<
  ArrowsExpandProps,
  {},
  { default: {} }
> {}
