/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SuitHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SuitHeartFill extends SvelteComponentTyped<
  SuitHeartFillProps,
  {},
  { default: {} }
> {}
