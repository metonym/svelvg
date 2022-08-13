/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MegaphoneFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MegaphoneFill extends SvelteComponentTyped<
  MegaphoneFillProps,
  {},
  { default: {} }
> {}
