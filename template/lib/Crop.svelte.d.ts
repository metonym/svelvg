/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CropProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Crop extends SvelteComponentTyped<
  CropProps,
  {},
  { default: {} }
> {}
