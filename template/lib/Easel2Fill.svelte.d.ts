/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Easel2FillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Easel2Fill extends SvelteComponentTyped<
  Easel2FillProps,
  {},
  { default: {} }
> {}
