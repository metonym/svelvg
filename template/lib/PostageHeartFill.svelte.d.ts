/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostageHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PostageHeartFill extends SvelteComponentTyped<
  PostageHeartFillProps,
  {},
  { default: {} }
> {}
