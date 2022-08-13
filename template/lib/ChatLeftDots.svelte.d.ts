/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatLeftDotsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatLeftDots extends SvelteComponentTyped<
  ChatLeftDotsProps,
  {},
  { default: {} }
> {}
