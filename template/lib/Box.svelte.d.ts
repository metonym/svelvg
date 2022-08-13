/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Box extends SvelteComponentTyped<
  BoxProps,
  {},
  { default: {} }
> {}
