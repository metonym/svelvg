/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Window extends SvelteComponentTyped<
  WindowProps,
  {},
  { default: {} }
> {}
