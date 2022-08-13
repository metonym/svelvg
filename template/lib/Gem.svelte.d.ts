/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GemProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Gem extends SvelteComponentTyped<
  GemProps,
  {},
  { default: {} }
> {}
