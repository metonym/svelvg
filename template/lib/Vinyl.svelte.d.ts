/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VinylProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Vinyl extends SvelteComponentTyped<
  VinylProps,
  {},
  { default: {} }
> {}
