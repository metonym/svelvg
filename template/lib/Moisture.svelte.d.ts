/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MoistureProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Moisture extends SvelteComponentTyped<
  MoistureProps,
  {},
  { default: {} }
> {}
