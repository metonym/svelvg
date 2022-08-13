/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookHalf extends SvelteComponentTyped<
  BookHalfProps,
  {},
  { default: {} }
> {}
