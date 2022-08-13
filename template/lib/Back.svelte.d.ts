/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BackProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Back extends SvelteComponentTyped<
  BackProps,
  {},
  { default: {} }
> {}
