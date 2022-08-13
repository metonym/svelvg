/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PauseBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PauseBtn extends SvelteComponentTyped<
  PauseBtnProps,
  {},
  { default: {} }
> {}
