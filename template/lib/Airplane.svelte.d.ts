/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AirplaneProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Airplane extends SvelteComponentTyped<
  AirplaneProps,
  {},
  { default: {} }
> {}
