/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JournalCodeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JournalCode extends SvelteComponentTyped<
  JournalCodeProps,
  {},
  { default: {} }
> {}
