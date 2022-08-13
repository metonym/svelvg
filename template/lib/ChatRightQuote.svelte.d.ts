/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatRightQuoteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatRightQuote extends SvelteComponentTyped<
  ChatRightQuoteProps,
  {},
  { default: {} }
> {}
