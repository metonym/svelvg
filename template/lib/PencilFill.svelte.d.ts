/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PencilFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PencilFill extends SvelteComponentTyped<
  PencilFillProps,
  {},
  { default: {} }
> {}
