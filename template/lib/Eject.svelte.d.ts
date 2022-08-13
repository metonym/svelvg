/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EjectProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Eject extends SvelteComponentTyped<
  EjectProps,
  {},
  { default: {} }
> {}
