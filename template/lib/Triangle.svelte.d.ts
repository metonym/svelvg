/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TriangleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Triangle extends SvelteComponentTyped<
  TriangleProps,
  {},
  { default: {} }
> {}
