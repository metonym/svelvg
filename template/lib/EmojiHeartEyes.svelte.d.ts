/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EmojiHeartEyesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EmojiHeartEyes extends SvelteComponentTyped<
  EmojiHeartEyesProps,
  {},
  { default: {} }
> {}
