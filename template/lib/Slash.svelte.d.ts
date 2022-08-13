/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Slash extends SvelteComponentTyped<
  SlashProps,
  {},
  { default: {} }
> {}
