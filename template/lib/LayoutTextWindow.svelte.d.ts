/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayoutTextWindowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayoutTextWindow extends SvelteComponentTyped<
  LayoutTextWindowProps,
  {},
  { default: {} }
> {}
