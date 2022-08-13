/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeSdFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeSdFill extends SvelteComponentTyped<
  BadgeSdFillProps,
  {},
  { default: {} }
> {}
