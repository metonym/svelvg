/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SimFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SimFill extends SvelteComponentTyped<
  SimFillProps,
  {},
  { default: {} }
> {}
