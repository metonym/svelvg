/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiSunglassesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiSunglasses extends SvelteComponentTyped<
  EmojiSunglassesProps,
  {},
  { default: {} }
> {}
