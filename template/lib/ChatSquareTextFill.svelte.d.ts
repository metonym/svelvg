/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareTextFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquareTextFill extends SvelteComponentTyped<
  ChatSquareTextFillProps,
  {},
  { default: {} }
> {}
