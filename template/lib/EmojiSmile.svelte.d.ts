/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiSmileProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiSmile extends SvelteComponentTyped<
  EmojiSmileProps,
  {},
  { default: {} }
> {}
