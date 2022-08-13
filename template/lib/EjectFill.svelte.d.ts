/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EjectFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EjectFill extends SvelteComponentTyped<
  EjectFillProps,
  {},
  { default: {} }
> {}
