/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AirplaneEnginesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AirplaneEngines extends SvelteComponentTyped<
  AirplaneEnginesProps,
  {},
  { default: {} }
> {}
