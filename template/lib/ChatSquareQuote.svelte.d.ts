/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareQuoteProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquareQuote extends SvelteComponentTyped<
  ChatSquareQuoteProps,
  {},
  { default: {} }
> {}
