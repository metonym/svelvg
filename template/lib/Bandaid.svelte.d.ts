/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BandaidProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bandaid extends SvelteComponentTyped<
  BandaidProps,
  {},
  { default: {} }
> {}
