/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MusicNoteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MusicNote extends SvelteComponentTyped<
  MusicNoteProps,
  {},
  { default: {} }
> {}
