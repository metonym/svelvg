/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MusicPlayerFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MusicPlayerFill extends SvelteComponentTyped<
  MusicPlayerFillProps,
  {},
  { default: {} }
> {}
