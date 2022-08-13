/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudHailProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudHail extends SvelteComponentTyped<
  CloudHailProps,
  {},
  { default: {} }
> {}
