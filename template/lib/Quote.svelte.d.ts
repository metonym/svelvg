/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuoteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Quote extends SvelteComponentTyped<
  QuoteProps,
  {},
  { default: {} }
> {}
