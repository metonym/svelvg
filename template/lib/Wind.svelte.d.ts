/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Wind extends SvelteComponentTyped<
  WindProps,
  {},
  { default: {} }
> {}
