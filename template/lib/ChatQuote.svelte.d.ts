/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatQuoteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatQuote extends SvelteComponentTyped<
  ChatQuoteProps,
  {},
  { default: {} }
> {}
