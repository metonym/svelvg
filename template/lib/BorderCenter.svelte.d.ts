/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderCenterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderCenter extends SvelteComponentTyped<
  BorderCenterProps,
  {},
  { default: {} }
> {}
