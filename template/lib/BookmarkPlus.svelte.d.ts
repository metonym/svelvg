/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkPlus extends SvelteComponentTyped<
  BookmarkPlusProps,
  {},
  { default: {} }
> {}
