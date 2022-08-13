/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Chat extends SvelteComponentTyped<
  ChatProps,
  {},
  { default: {} }
> {}
