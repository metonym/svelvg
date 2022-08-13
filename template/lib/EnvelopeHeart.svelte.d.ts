/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeHeart extends SvelteComponentTyped<
  EnvelopeHeartProps,
  {},
  { default: {} }
> {}
