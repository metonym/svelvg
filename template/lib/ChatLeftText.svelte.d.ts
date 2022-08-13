/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatLeftTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatLeftText extends SvelteComponentTyped<
  ChatLeftTextProps,
  {},
  { default: {} }
> {}
