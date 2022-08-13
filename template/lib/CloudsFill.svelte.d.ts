/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudsFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudsFill extends SvelteComponentTyped<
  CloudsFillProps,
  {},
  { default: {} }
> {}
