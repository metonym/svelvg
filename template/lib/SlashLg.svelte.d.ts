/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlashLgProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SlashLg extends SvelteComponentTyped<
  SlashLgProps,
  {},
  { default: {} }
> {}
