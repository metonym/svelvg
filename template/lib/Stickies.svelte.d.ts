/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StickiesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Stickies extends SvelteComponentTyped<
  StickiesProps,
  {},
  { default: {} }
> {}
