/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalBookmarkProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalBookmark extends SvelteComponentTyped<
  JournalBookmarkProps,
  {},
  { default: {} }
> {}
