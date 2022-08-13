/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DribbbleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Dribbble extends SvelteComponentTyped<
  DribbbleProps,
  {},
  { default: {} }
> {}
