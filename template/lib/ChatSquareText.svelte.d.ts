/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquareText extends SvelteComponentTyped<
  ChatSquareTextProps,
  {},
  { default: {} }
> {}
