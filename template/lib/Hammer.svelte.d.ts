/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HammerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hammer extends SvelteComponentTyped<
  HammerProps,
  {},
  { default: {} }
> {}
