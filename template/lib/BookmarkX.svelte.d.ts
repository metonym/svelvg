/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkX extends SvelteComponentTyped<
  BookmarkXProps,
  {},
  { default: {} }
> {}
