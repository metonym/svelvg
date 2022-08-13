/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartbreakProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Heartbreak extends SvelteComponentTyped<
  HeartbreakProps,
  {},
  { default: {} }
> {}
