/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatTextFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatTextFill extends SvelteComponentTyped<
  ChatTextFillProps,
  {},
  { default: {} }
> {}
