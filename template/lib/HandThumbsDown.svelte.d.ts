/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HandThumbsDownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HandThumbsDown extends SvelteComponentTyped<
  HandThumbsDownProps,
  {},
  { default: {} }
> {}
