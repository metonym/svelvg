/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpeakerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Speaker extends SvelteComponentTyped<
  SpeakerProps,
  {},
  { default: {} }
> {}
