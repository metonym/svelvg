/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatLeftQuoteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatLeftQuote extends SvelteComponentTyped<
  ChatLeftQuoteProps,
  {},
  { default: {} }
> {}
