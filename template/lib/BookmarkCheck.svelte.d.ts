/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkCheck extends SvelteComponentTyped<
  BookmarkCheckProps,
  {},
  { default: {} }
> {}
