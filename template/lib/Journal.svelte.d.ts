/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Journal extends SvelteComponentTyped<
  JournalProps,
  {},
  { default: {} }
> {}
