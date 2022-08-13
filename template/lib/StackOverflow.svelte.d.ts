/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StackOverflowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StackOverflow extends SvelteComponentTyped<
  StackOverflowProps,
  {},
  { default: {} }
> {}
