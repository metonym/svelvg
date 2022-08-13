/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlusCircle extends SvelteComponentTyped<
  PlusCircleProps,
  {},
  { default: {} }
> {}
