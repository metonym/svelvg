/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bookmark extends SvelteComponentTyped<
  BookmarkProps,
  {},
  { default: {} }
> {}
