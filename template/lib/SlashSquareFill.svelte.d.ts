/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlashSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SlashSquareFill extends SvelteComponentTyped<
  SlashSquareFillProps,
  {},
  { default: {} }
> {}
