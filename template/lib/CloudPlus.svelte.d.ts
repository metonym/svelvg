/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudPlus extends SvelteComponentTyped<
  CloudPlusProps,
  {},
  { default: {} }
> {}
