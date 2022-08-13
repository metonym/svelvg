/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UnionProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Union extends SvelteComponentTyped<
  UnionProps,
  {},
  { default: {} }
> {}
