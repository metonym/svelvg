/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostageFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PostageFill extends SvelteComponentTyped<
  PostageFillProps,
  {},
  { default: {} }
> {}
