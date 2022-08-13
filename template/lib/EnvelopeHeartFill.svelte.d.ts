/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeHeartFill extends SvelteComponentTyped<
  EnvelopeHeartFillProps,
  {},
  { default: {} }
> {}
