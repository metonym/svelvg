/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CursorTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CursorText extends SvelteComponentTyped<
  CursorTextProps,
  {},
  { default: {} }
> {}
