/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PcProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pc extends SvelteComponentTyped<
  PcProps,
  {},
  { default: {} }
> {}
