/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeSdProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeSd extends SvelteComponentTyped<
  BadgeSdProps,
  {},
  { default: {} }
> {}
