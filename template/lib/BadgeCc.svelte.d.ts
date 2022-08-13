/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeCcProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeCc extends SvelteComponentTyped<
  BadgeCcProps,
  {},
  { default: {} }
> {}
