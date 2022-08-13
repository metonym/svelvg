/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelephoneFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TelephoneFill extends SvelteComponentTyped<
  TelephoneFillProps,
  {},
  { default: {} }
> {}
