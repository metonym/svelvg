/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FastForwardBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FastForwardBtn extends SvelteComponentTyped<
  FastForwardBtnProps,
  {},
  { default: {} }
> {}
