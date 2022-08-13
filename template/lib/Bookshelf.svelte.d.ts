/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookshelfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bookshelf extends SvelteComponentTyped<
  BookshelfProps,
  {},
  { default: {} }
> {}
