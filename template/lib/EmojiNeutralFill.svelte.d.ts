/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiNeutralFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiNeutralFill extends SvelteComponentTyped<
  EmojiNeutralFillProps,
  {},
  { default: {} }
> {}
