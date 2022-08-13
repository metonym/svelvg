/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalRichtextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalRichtext extends SvelteComponentTyped<
  JournalRichtextProps,
  {},
  { default: {} }
> {}
