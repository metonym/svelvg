/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OctagonHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class OctagonHalf extends SvelteComponentTyped<
  OctagonHalfProps,
  {},
  { default: {} }
> {}
