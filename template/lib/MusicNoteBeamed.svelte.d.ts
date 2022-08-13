/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MusicNoteBeamedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MusicNoteBeamed extends SvelteComponentTyped<
  MusicNoteBeamedProps,
  {},
  { default: {} }
> {}
