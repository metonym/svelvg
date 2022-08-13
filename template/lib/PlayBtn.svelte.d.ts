/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlayBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlayBtn extends SvelteComponentTyped<
  PlayBtnProps,
  {},
  { default: {} }
> {}
