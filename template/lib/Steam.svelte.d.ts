/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SteamProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Steam extends SvelteComponentTyped<
  SteamProps,
  {},
  { default: {} }
> {}
