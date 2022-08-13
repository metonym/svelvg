/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudCheck extends SvelteComponentTyped<
  CloudCheckProps,
  {},
  { default: {} }
> {}
