/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquareHeartFill extends SvelteComponentTyped<
  ChatSquareHeartFillProps,
  {},
  { default: {} }
> {}
