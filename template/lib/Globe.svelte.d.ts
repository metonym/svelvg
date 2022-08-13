/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Globe extends SvelteComponentTyped<
  GlobeProps,
  {},
  { default: {} }
> {}
