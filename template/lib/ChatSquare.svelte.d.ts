/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquare extends SvelteComponentTyped<
  ChatSquareProps,
  {},
  { default: {} }
> {}
