/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiSmileFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiSmileFill extends SvelteComponentTyped<
  EmojiSmileFillProps,
  {},
  { default: {} }
> {}
