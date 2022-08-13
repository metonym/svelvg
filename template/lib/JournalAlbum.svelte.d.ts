/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalAlbumProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalAlbum extends SvelteComponentTyped<
  JournalAlbumProps,
  {},
  { default: {} }
> {}
