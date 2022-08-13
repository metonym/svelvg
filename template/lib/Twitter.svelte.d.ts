/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TwitterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Twitter extends SvelteComponentTyped<
  TwitterProps,
  {},
  { default: {} }
> {}
