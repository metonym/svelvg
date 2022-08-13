/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SnowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Snow extends SvelteComponentTyped<
  SnowProps,
  {},
  { default: {} }
> {}
