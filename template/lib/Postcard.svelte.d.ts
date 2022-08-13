/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostcardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Postcard extends SvelteComponentTyped<
  PostcardProps,
  {},
  { default: {} }
> {}
