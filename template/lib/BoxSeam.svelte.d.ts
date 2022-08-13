/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxSeamProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BoxSeam extends SvelteComponentTyped<
  BoxSeamProps,
  {},
  { default: {} }
> {}
