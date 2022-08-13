/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DisplayportFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DisplayportFill extends SvelteComponentTyped<
  DisplayportFillProps,
  {},
  { default: {} }
> {}
