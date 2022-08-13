/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlayFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlayFill extends SvelteComponentTyped<
  PlayFillProps,
  {},
  { default: {} }
> {}
