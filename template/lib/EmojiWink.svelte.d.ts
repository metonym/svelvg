/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiWinkProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiWink extends SvelteComponentTyped<
  EmojiWinkProps,
  {},
  { default: {} }
> {}
