/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FingerprintProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Fingerprint extends SvelteComponentTyped<
  FingerprintProps,
  {},
  { default: {} }
> {}
