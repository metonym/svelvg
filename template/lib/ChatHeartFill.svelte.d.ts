/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatHeartFill extends SvelteComponentTyped<
  ChatHeartFillProps,
  {},
  { default: {} }
> {}
