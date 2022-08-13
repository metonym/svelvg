/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CompassProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Compass extends SvelteComponentTyped<
  CompassProps,
  {},
  { default: {} }
> {}
