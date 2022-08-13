/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatQuoteFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatQuoteFill extends SvelteComponentTyped<
  ChatQuoteFillProps,
  {},
  { default: {} }
> {}
