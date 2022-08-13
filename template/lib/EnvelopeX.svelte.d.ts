/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeX extends SvelteComponentTyped<
  EnvelopeXProps,
  {},
  { default: {} }
> {}
