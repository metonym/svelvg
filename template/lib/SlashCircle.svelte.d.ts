/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlashCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SlashCircle extends SvelteComponentTyped<
  SlashCircleProps,
  {},
  { default: {} }
> {}
