/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AwardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Award extends SvelteComponentTyped<
  AwardProps,
  {},
  { default: {} }
> {}
