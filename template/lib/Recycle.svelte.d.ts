/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RecycleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Recycle extends SvelteComponentTyped<
  RecycleProps,
  {},
  { default: {} }
> {}
