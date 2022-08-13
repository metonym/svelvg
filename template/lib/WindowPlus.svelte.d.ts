/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowPlus extends SvelteComponentTyped<
  WindowPlusProps,
  {},
  { default: {} }
> {}
