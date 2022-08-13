/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HddNetworkProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HddNetwork extends SvelteComponentTyped<
  HddNetworkProps,
  {},
  { default: {} }
> {}
