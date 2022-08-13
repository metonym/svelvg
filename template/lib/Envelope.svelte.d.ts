/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Envelope extends SvelteComponentTyped<
  EnvelopeProps,
  {},
  { default: {} }
> {}
