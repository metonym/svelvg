/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiNeutralProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiNeutral extends SvelteComponentTyped<
  EmojiNeutralProps,
  {},
  { default: {} }
> {}
