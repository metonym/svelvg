/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SegmentedNavProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SegmentedNav extends SvelteComponentTyped<
  SegmentedNavProps,
  {},
  { default: {} }
> {}
