/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MaskProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Mask extends SvelteComponentTyped<
  MaskProps,
  {},
  { default: {} }
> {}
