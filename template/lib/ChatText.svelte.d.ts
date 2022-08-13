/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatText extends SvelteComponentTyped<
  ChatTextProps,
  {},
  { default: {} }
> {}
