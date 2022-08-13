/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WordpressProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Wordpress extends SvelteComponentTyped<
  WordpressProps,
  {},
  { default: {} }
> {}
