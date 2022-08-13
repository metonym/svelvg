/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InstagramProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Instagram extends SvelteComponentTyped<
  InstagramProps,
  {},
  { default: {} }
> {}
