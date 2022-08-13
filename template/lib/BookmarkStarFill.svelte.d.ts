/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkStarFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkStarFill extends SvelteComponentTyped<
  BookmarkStarFillProps,
  {},
  { default: {} }
> {}
