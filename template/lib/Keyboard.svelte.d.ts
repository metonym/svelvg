/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeyboardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Keyboard extends SvelteComponentTyped<
  KeyboardProps,
  {},
  { default: {} }
> {}
