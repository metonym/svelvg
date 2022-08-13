/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EscapeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Escape extends SvelteComponentTyped<
  EscapeProps,
  {},
  { default: {} }
> {}
