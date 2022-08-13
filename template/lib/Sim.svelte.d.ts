/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SimProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Sim extends SvelteComponentTyped<
  SimProps,
  {},
  { default: {} }
> {}
