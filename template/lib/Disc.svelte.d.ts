/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DiscProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Disc extends SvelteComponentTyped<
  DiscProps,
  {},
  { default: {} }
> {}
