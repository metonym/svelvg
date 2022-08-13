/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostcardHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PostcardHeartFill extends SvelteComponentTyped<
  PostcardHeartFillProps,
  {},
  { default: {} }
> {}
