/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThunderboltProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Thunderbolt extends SvelteComponentTyped<
  ThunderboltProps,
  {},
  { default: {} }
> {}
