/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RewindProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Rewind extends SvelteComponentTyped<
  RewindProps,
  {},
  { default: {} }
> {}
