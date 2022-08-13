/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Diagram3FillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Diagram3Fill extends SvelteComponentTyped<
  Diagram3FillProps,
  {},
  { default: {} }
> {}
