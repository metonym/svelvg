/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PeaceFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PeaceFill extends SvelteComponentTyped<
  PeaceFillProps,
  {},
  { default: {} }
> {}
