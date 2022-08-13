/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeGifProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeGif extends SvelteComponentTyped<
  FiletypeGifProps,
  {},
  { default: {} }
> {}
