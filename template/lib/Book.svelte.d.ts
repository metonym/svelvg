/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Book extends SvelteComponentTyped<
  BookProps,
  {},
  { default: {} }
> {}
