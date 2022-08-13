/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SkipEndBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SkipEndBtn extends SvelteComponentTyped<
  SkipEndBtnProps,
  {},
  { default: {} }
> {}
