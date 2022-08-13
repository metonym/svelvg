/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Easel3FillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Easel3Fill extends SvelteComponentTyped<
  Easel3FillProps,
  {},
  { default: {} }
> {}
