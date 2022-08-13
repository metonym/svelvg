/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TypeUnderlineProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TypeUnderline extends SvelteComponentTyped<
  TypeUnderlineProps,
  {},
  { default: {} }
> {}
