/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaletteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Palette extends SvelteComponentTyped<
  PaletteProps,
  {},
  { default: {} }
> {}
