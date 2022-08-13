/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RedditProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Reddit extends SvelteComponentTyped<
  RedditProps,
  {},
  { default: {} }
> {}
