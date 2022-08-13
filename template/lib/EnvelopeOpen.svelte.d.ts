/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeOpenProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeOpen extends SvelteComponentTyped<
  EnvelopeOpenProps,
  {},
  { default: {} }
> {}
