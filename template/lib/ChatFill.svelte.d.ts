/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatFill extends SvelteComponentTyped<
  ChatFillProps,
  {},
  { default: {} }
> {}
