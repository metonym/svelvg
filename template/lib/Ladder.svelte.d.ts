/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LadderProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Ladder extends SvelteComponentTyped<
  LadderProps,
  {},
  { default: {} }
> {}
