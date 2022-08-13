/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PentagonHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PentagonHalf extends SvelteComponentTyped<
  PentagonHalfProps,
  {},
  { default: {} }
> {}
