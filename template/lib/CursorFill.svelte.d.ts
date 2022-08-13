/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CursorFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CursorFill extends SvelteComponentTyped<
  CursorFillProps,
  {},
  { default: {} }
> {}
