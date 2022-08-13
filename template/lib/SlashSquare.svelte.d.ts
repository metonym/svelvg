/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlashSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SlashSquare extends SvelteComponentTyped<
  SlashSquareProps,
  {},
  { default: {} }
> {}
