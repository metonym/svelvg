/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatHeart extends SvelteComponentTyped<
  ChatHeartProps,
  {},
  { default: {} }
> {}
