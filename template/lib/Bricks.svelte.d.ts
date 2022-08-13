/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BricksProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bricks extends SvelteComponentTyped<
  BricksProps,
  {},
  { default: {} }
> {}
