/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MoonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MoonFill extends SvelteComponentTyped<
  MoonFillProps,
  {},
  { default: {} }
> {}
