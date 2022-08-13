/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HandThumbsUpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HandThumbsUp extends SvelteComponentTyped<
  HandThumbsUpProps,
  {},
  { default: {} }
> {}
