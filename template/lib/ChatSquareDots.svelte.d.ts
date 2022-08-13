/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareDotsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquareDots extends SvelteComponentTyped<
  ChatSquareDotsProps,
  {},
  { default: {} }
> {}
