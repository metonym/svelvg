/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeyFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class KeyFill extends SvelteComponentTyped<
  KeyFillProps,
  {},
  { default: {} }
> {}
