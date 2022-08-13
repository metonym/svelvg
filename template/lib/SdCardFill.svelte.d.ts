/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SdCardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SdCardFill extends SvelteComponentTyped<
  SdCardFillProps,
  {},
  { default: {} }
> {}
