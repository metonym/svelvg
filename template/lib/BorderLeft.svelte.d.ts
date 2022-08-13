/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderLeft extends SvelteComponentTyped<
  BorderLeftProps,
  {},
  { default: {} }
> {}
