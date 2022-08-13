/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkFill extends SvelteComponentTyped<
  BookmarkFillProps,
  {},
  { default: {} }
> {}
