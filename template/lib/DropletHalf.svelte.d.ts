/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropletHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DropletHalf extends SvelteComponentTyped<
  DropletHalfProps,
  {},
  { default: {} }
> {}
