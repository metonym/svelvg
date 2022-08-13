/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Play extends SvelteComponentTyped<
  PlayProps,
  {},
  { default: {} }
> {}
