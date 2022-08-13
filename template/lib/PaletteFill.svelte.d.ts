/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaletteFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PaletteFill extends SvelteComponentTyped<
  PaletteFillProps,
  {},
  { default: {} }
> {}
