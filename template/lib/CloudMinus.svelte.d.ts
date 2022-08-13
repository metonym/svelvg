/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudMinusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudMinus extends SvelteComponentTyped<
  CloudMinusProps,
  {},
  { default: {} }
> {}
