/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TwitchProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Twitch extends SvelteComponentTyped<
  TwitchProps,
  {},
  { default: {} }
> {}
