/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatRightDotsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatRightDots extends SvelteComponentTyped<
  ChatRightDotsProps,
  {},
  { default: {} }
> {}
