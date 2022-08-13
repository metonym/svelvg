/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SuitSpadeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SuitSpade extends SvelteComponentTyped<
  SuitSpadeProps,
  {},
  { default: {} }
> {}
