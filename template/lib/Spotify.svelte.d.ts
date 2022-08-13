/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpotifyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Spotify extends SvelteComponentTyped<
  SpotifyProps,
  {},
  { default: {} }
> {}
