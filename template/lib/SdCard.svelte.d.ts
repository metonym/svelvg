/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SdCardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SdCard extends SvelteComponentTyped<
  SdCardProps,
  {},
  { default: {} }
> {}
