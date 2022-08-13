/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkStarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkStar extends SvelteComponentTyped<
  BookmarkStarProps,
  {},
  { default: {} }
> {}
