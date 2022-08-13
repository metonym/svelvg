/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DisplayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Display extends SvelteComponentTyped<
  DisplayProps,
  {},
  { default: {} }
> {}
