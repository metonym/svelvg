/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThreeDotsVerticalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThreeDotsVertical extends SvelteComponentTyped<
  ThreeDotsVerticalProps,
  {},
  { default: {} }
> {}
