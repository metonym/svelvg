/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TagsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tags extends SvelteComponentTyped<
  TagsProps,
  {},
  { default: {} }
> {}
