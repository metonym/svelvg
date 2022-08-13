/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GiftFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GiftFill extends SvelteComponentTyped<
  GiftFillProps,
  {},
  { default: {} }
> {}
