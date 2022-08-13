/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UnlockProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Unlock extends SvelteComponentTyped<
  UnlockProps,
  {},
  { default: {} }
> {}
