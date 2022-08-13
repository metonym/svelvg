/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostageHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PostageHeart extends SvelteComponentTyped<
  PostageHeartProps,
  {},
  { default: {} }
> {}
