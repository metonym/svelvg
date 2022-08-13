/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClipboardPulseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClipboardPulse extends SvelteComponentTyped<
  ClipboardPulseProps,
  {},
  { default: {} }
> {}
