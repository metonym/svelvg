/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MicFill extends SvelteComponentTyped<
  MicFillProps,
  {},
  { default: {} }
> {}
