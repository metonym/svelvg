/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RssProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Rss extends SvelteComponentTyped<
  RssProps,
  {},
  { default: {} }
> {}
