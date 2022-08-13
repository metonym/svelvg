/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Box2HeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Box2Heart extends SvelteComponentTyped<
  Box2HeartProps,
  {},
  { default: {} }
> {}
