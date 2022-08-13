/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PinterestProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pinterest extends SvelteComponentTyped<
  PinterestProps,
  {},
  { default: {} }
> {}
