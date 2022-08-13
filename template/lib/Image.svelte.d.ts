/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ImageProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Image extends SvelteComponentTyped<
  ImageProps,
  {},
  { default: {} }
> {}
