/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LockProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Lock extends SvelteComponentTyped<
  LockProps,
  {},
  { default: {} }
> {}
