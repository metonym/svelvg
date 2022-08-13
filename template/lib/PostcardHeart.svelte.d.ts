/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostcardHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PostcardHeart extends SvelteComponentTyped<
  PostcardHeartProps,
  {},
  { default: {} }
> {}
