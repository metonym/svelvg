/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ImageAltProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ImageAlt extends SvelteComponentTyped<
  ImageAltProps,
  {},
  { default: {} }
> {}
