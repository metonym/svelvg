/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarksFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarksFill extends SvelteComponentTyped<
  BookmarksFillProps,
  {},
  { default: {} }
> {}
