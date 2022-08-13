/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SoundwaveProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Soundwave extends SvelteComponentTyped<
  SoundwaveProps,
  {},
  { default: {} }
> {}
