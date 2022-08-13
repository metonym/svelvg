/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlashCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SlashCircleFill extends SvelteComponentTyped<
  SlashCircleFillProps,
  {},
  { default: {} }
> {}
