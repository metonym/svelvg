/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeadphonesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Headphones extends SvelteComponentTyped<
  HeadphonesProps,
  {},
  { default: {} }
> {}
