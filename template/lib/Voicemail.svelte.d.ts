/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VoicemailProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Voicemail extends SvelteComponentTyped<
  VoicemailProps,
  {},
  { default: {} }
> {}
