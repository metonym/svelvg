/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RadioactiveProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Radioactive extends SvelteComponentTyped<
  RadioactiveProps,
  {},
  { default: {} }
> {}
