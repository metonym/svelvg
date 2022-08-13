/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MusicPlayerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MusicPlayer extends SvelteComponentTyped<
  MusicPlayerProps,
  {},
  { default: {} }
> {}
