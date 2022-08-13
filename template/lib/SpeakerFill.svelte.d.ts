/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpeakerFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SpeakerFill extends SvelteComponentTyped<
  SpeakerFillProps,
  {},
  { default: {} }
> {}
