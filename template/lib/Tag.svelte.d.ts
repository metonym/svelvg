/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TagProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tag extends SvelteComponentTyped<
  TagProps,
  {},
  { default: {} }
> {}
