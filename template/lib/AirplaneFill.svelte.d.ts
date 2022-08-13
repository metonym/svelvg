/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AirplaneFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AirplaneFill extends SvelteComponentTyped<
  AirplaneFillProps,
  {},
  { default: {} }
> {}
