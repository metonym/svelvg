/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarkDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BookmarkDash extends SvelteComponentTyped<
  BookmarkDashProps,
  {},
  { default: {} }
> {}
