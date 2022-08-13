/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CapslockProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Capslock extends SvelteComponentTyped<
  CapslockProps,
  {},
  { default: {} }
> {}
