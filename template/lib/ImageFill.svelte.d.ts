/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ImageFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ImageFill extends SvelteComponentTyped<
  ImageFillProps,
  {},
  { default: {} }
> {}
