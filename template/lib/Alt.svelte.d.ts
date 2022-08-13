/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AltProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Alt extends SvelteComponentTyped<
  AltProps,
  {},
  { default: {} }
> {}
