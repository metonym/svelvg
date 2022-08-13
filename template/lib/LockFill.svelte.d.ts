/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LockFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LockFill extends SvelteComponentTyped<
  LockFillProps,
  {},
  { default: {} }
> {}
