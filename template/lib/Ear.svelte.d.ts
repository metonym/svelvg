/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Ear extends SvelteComponentTyped<
  EarProps,
  {},
  { default: {} }
> {}
