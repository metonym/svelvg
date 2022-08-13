/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkHeartFill extends SvelteComponentTyped<
  BookmarkHeartFillProps,
  {},
  { default: {} }
> {}
