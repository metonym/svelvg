/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CastProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cast extends SvelteComponentTyped<
  CastProps,
  {},
  { default: {} }
> {}
