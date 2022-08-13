/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalPlus extends SvelteComponentTyped<
  JournalPlusProps,
  {},
  { default: {} }
> {}
