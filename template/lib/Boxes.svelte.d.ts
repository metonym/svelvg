/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Boxes extends SvelteComponentTyped<
  BoxesProps,
  {},
  { default: {} }
> {}
