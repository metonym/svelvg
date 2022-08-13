/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatLeft extends SvelteComponentTyped<
  ChatLeftProps,
  {},
  { default: {} }
> {}
