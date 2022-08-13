/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LampFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LampFill extends SvelteComponentTyped<
  LampFillProps,
  {},
  { default: {} }
> {}
