/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagCheck extends SvelteComponentTyped<
  BagCheckProps,
  {},
  { default: {} }
> {}
