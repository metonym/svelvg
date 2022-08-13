/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChatSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChatSquareFill extends SvelteComponentTyped<
  ChatSquareFillProps,
  {},
  { default: {} }
> {}
