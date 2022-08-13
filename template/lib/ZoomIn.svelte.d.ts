/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ZoomInProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ZoomIn extends SvelteComponentTyped<
  ZoomInProps,
  {},
  { default: {} }
> {}
