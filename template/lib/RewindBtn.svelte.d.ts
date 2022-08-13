/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RewindBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RewindBtn extends SvelteComponentTyped<
  RewindBtnProps,
  {},
  { default: {} }
> {}
