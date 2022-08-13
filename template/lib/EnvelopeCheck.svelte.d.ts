/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeCheck extends SvelteComponentTyped<
  EnvelopeCheckProps,
  {},
  { default: {} }
> {}
