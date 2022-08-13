/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MastodonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Mastodon extends SvelteComponentTyped<
  MastodonProps,
  {},
  { default: {} }
> {}
