/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatRightTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatRightText extends SvelteComponentTyped<
  ChatRightTextProps,
  {},
  { default: {} }
> {}
