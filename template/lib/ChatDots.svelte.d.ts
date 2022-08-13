/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatDotsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatDots extends SvelteComponentTyped<
  ChatDotsProps,
  {},
  { default: {} }
> {}
