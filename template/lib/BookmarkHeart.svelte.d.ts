/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkHeart extends SvelteComponentTyped<
  BookmarkHeartProps,
  {},
  { default: {} }
> {}
