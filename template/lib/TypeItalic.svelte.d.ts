/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TypeItalicProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TypeItalic extends SvelteComponentTyped<
  TypeItalicProps,
  {},
  { default: {} }
> {}
