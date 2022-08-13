/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WrenchAdjustableProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WrenchAdjustable extends SvelteComponentTyped<
  WrenchAdjustableProps,
  {},
  { default: {} }
> {}
