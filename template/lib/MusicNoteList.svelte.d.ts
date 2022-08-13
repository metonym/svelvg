/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MusicNoteListProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MusicNoteList extends SvelteComponentTyped<
  MusicNoteListProps,
  {},
  { default: {} }
> {}
