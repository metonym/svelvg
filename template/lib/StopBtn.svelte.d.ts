/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StopBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StopBtn extends SvelteComponentTyped<
  StopBtnProps,
  {},
  { default: {} }
> {}
