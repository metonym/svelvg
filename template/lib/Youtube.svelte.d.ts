/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface YoutubeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Youtube extends SvelteComponentTyped<
  YoutubeProps,
  {},
  { default: {} }
> {}
