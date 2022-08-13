/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BookmarksProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bookmarks extends SvelteComponentTyped<
  BookmarksProps,
  {},
  { default: {} }
> {}
