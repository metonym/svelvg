/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StickyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Sticky extends SvelteComponentTyped<
  StickyProps,
  {},
  { default: {} }
> {}
