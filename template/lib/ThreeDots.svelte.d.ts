/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThreeDotsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThreeDots extends SvelteComponentTyped<
  ThreeDotsProps,
  {},
  { default: {} }
> {}
