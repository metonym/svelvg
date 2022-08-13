/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiKissProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiKiss extends SvelteComponentTyped<
  EmojiKissProps,
  {},
  { default: {} }
> {}
