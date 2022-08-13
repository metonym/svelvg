/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquareHeart extends SvelteComponentTyped<
  ChatSquareHeartProps,
  {},
  { default: {} }
> {}
