/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PatchCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PatchCheck extends SvelteComponentTyped<
  PatchCheckProps,
  {},
  { default: {} }
> {}
