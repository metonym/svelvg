/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiExpressionlessProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiExpressionless extends SvelteComponentTyped<
  EmojiExpressionlessProps,
  {},
  { default: {} }
> {}
