/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DiscordProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Discord extends SvelteComponentTyped<
  DiscordProps,
  {},
  { default: {} }
> {}
