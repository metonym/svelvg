/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HandIndexProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HandIndex extends SvelteComponentTyped<
  HandIndexProps,
  {},
  { default: {} }
> {}
