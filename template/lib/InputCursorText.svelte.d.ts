/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InputCursorTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class InputCursorText extends SvelteComponentTyped<
  InputCursorTextProps,
  {},
  { default: {} }
> {}
