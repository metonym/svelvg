/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface YelpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Yelp extends SvelteComponentTyped<
  YelpProps,
  {},
  { default: {} }
> {}
