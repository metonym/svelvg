/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SkipStartBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SkipStartBtn extends SvelteComponentTyped<
  SkipStartBtnProps,
  {},
  { default: {} }
> {}
