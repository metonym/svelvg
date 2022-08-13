/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiDizzyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiDizzy extends SvelteComponentTyped<
  EmojiDizzyProps,
  {},
  { default: {} }
> {}
