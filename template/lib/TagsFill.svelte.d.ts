/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TagsFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TagsFill extends SvelteComponentTyped<
  TagsFillProps,
  {},
  { default: {} }
> {}
