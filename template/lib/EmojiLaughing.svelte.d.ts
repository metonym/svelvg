/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiLaughingProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiLaughing extends SvelteComponentTyped<
  EmojiLaughingProps,
  {},
  { default: {} }
> {}
