/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowX extends SvelteComponentTyped<
  WindowXProps,
  {},
  { default: {} }
> {}
