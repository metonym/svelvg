/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IntersectProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Intersect extends SvelteComponentTyped<
  IntersectProps,
  {},
  { default: {} }
> {}
