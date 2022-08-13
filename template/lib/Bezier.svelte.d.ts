/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BezierProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bezier extends SvelteComponentTyped<
  BezierProps,
  {},
  { default: {} }
> {}
