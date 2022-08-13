/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Windows extends SvelteComponentTyped<
  WindowsProps,
  {},
  { default: {} }
> {}
