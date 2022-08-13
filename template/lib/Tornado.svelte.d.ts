/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TornadoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tornado extends SvelteComponentTyped<
  TornadoProps,
  {},
  { default: {} }
> {}
