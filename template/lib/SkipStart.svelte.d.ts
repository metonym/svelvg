/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SkipStartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SkipStart extends SvelteComponentTyped<
  SkipStartProps,
  {},
  { default: {} }
> {}
