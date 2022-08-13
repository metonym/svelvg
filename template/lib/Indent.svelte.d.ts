/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IndentProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Indent extends SvelteComponentTyped<
  IndentProps,
  {},
  { default: {} }
> {}
