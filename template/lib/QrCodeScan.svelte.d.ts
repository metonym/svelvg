/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QrCodeScanProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QrCodeScan extends SvelteComponentTyped<
  QrCodeScanProps,
  {},
  { default: {} }
> {}
