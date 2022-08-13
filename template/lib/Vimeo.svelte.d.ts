/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VimeoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Vimeo extends SvelteComponentTyped<
  VimeoProps,
  {},
  { default: {} }
> {}
