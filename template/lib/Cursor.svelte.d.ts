/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CursorProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cursor extends SvelteComponentTyped<
  CursorProps,
  {},
  { default: {} }
> {}
