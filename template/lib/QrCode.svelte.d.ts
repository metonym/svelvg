/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QrCodeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QrCode extends SvelteComponentTyped<
  QrCodeProps,
  {},
  { default: {} }
> {}
