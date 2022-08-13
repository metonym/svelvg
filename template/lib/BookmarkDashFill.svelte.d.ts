/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkDashFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkDashFill extends SvelteComponentTyped<
  BookmarkDashFillProps,
  {},
  { default: {} }
> {}
