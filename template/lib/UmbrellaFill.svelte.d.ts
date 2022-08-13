/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UmbrellaFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UmbrellaFill extends SvelteComponentTyped<
  UmbrellaFillProps,
  {},
  { default: {} }
> {}
