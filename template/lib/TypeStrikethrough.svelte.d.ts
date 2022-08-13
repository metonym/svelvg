/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TypeStrikethroughProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TypeStrikethrough extends SvelteComponentTyped<
  TypeStrikethroughProps,
  {},
  { default: {} }
> {}
