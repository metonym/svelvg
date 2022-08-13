/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TagFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TagFill extends SvelteComponentTyped<
  TagFillProps,
  {},
  { default: {} }
> {}
