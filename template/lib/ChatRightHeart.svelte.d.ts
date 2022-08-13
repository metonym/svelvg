/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatRightHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatRightHeart extends SvelteComponentTyped<
  ChatRightHeartProps,
  {},
  { default: {} }
> {}
