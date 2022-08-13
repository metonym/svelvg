/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicMuteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MicMute extends SvelteComponentTyped<
  MicMuteProps,
  {},
  { default: {} }
> {}
