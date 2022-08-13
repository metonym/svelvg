/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OpticalAudioProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class OpticalAudio extends SvelteComponentTyped<
  OpticalAudioProps,
  {},
  { default: {} }
> {}
