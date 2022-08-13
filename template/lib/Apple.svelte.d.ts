/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AppleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Apple extends SvelteComponentTyped<
  AppleProps,
  {},
  { default: {} }
> {}
