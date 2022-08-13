/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Plus extends SvelteComponentTyped<
  PlusProps,
  {},
  { default: {} }
> {}
