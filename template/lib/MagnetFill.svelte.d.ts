/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MagnetFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MagnetFill extends SvelteComponentTyped<
  MagnetFillProps,
  {},
  { default: {} }
> {}
