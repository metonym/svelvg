/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalBookmarkFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalBookmarkFill extends SvelteComponentTyped<
  JournalBookmarkFillProps,
  {},
  { default: {} }
> {}
