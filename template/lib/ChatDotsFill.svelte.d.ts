/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatDotsFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatDotsFill extends SvelteComponentTyped<
  ChatDotsFillProps,
  {},
  { default: {} }
> {}
