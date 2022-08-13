/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiAngryProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiAngry extends SvelteComponentTyped<
  EmojiAngryProps,
  {},
  { default: {} }
> {}
