/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TiktokProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tiktok extends SvelteComponentTyped<
  TiktokProps,
  {},
  { default: {} }
> {}
