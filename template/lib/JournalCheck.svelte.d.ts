/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalCheck extends SvelteComponentTyped<
  JournalCheckProps,
  {},
  { default: {} }
> {}
