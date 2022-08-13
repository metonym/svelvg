/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlayBtnFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlayBtnFill extends SvelteComponentTyped<
  PlayBtnFillProps,
  {},
  { default: {} }
> {}
