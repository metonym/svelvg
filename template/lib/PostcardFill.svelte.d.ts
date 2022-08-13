/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostcardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PostcardFill extends SvelteComponentTyped<
  PostcardFillProps,
  {},
  { default: {} }
> {}
