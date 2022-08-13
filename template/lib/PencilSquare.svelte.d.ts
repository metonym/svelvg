/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PencilSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PencilSquare extends SvelteComponentTyped<
  PencilSquareProps,
  {},
  { default: {} }
> {}
