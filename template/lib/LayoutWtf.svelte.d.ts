/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayoutWtfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayoutWtf extends SvelteComponentTyped<
  LayoutWtfProps,
  {},
  { default: {} }
> {}
