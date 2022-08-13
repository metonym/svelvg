/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CompassFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CompassFill extends SvelteComponentTyped<
  CompassFillProps,
  {},
  { default: {} }
> {}
