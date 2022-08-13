/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalText extends SvelteComponentTyped<
  JournalTextProps,
  {},
  { default: {} }
> {}
