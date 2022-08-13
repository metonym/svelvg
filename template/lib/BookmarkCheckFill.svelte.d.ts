/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkCheckFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkCheckFill extends SvelteComponentTyped<
  BookmarkCheckFillProps,
  {},
  { default: {} }
> {}
