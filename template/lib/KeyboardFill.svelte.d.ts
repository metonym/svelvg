/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeyboardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class KeyboardFill extends SvelteComponentTyped<
  KeyboardFillProps,
  {},
  { default: {} }
> {}
