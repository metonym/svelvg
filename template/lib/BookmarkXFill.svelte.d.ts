/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkXFill extends SvelteComponentTyped<
  BookmarkXFillProps,
  {},
  { default: {} }
> {}
