/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UpcScanProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UpcScan extends SvelteComponentTyped<
  UpcScanProps,
  {},
  { default: {} }
> {}
