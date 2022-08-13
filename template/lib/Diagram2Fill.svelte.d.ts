/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Diagram2FillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Diagram2Fill extends SvelteComponentTyped<
  Diagram2FillProps,
  {},
  { default: {} }
> {}
