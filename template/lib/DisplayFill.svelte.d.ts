/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DisplayFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DisplayFill extends SvelteComponentTyped<
  DisplayFillProps,
  {},
  { default: {} }
> {}
