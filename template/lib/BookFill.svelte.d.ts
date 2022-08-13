/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookFill extends SvelteComponentTyped<
  BookFillProps,
  {},
  { default: {} }
> {}
