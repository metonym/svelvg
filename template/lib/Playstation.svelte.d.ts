/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlaystationProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Playstation extends SvelteComponentTyped<
  PlaystationProps,
  {},
  { default: {} }
> {}
