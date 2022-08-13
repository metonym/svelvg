/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SafeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SafeFill extends SvelteComponentTyped<
  SafeFillProps,
  {},
  { default: {} }
> {}
