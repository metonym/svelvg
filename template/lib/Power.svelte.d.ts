/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PowerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Power extends SvelteComponentTyped<
  PowerProps,
  {},
  { default: {} }
> {}
