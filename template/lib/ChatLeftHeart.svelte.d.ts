/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatLeftHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatLeftHeart extends SvelteComponentTyped<
  ChatLeftHeartProps,
  {},
  { default: {} }
> {}
