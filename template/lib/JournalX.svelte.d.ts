/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalX extends SvelteComponentTyped<
  JournalXProps,
  {},
  { default: {} }
> {}
