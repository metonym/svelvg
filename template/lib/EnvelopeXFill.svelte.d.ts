/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeXFill extends SvelteComponentTyped<
  EnvelopeXFillProps,
  {},
  { default: {} }
> {}
