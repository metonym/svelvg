/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CodeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Code extends SvelteComponentTyped<
  CodeProps,
  {},
  { default: {} }
> {}
