/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TriangleHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TriangleHalf extends SvelteComponentTyped<
  TriangleHalfProps,
  {},
  { default: {} }
> {}
