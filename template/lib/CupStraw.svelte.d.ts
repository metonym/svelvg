/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CupStrawProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CupStraw extends SvelteComponentTyped<
  CupStrawProps,
  {},
  { default: {} }
> {}
