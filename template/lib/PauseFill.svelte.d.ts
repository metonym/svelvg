/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PauseFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PauseFill extends SvelteComponentTyped<
  PauseFillProps,
  {},
  { default: {} }
> {}
