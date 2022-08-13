/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ZoomOutProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ZoomOut extends SvelteComponentTyped<
  ZoomOutProps,
  {},
  { default: {} }
> {}
