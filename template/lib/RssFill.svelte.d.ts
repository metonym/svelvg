/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RssFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RssFill extends SvelteComponentTyped<
  RssFillProps,
  {},
  { default: {} }
> {}
