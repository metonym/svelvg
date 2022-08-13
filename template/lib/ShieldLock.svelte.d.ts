/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldLockProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShieldLock extends SvelteComponentTyped<
  ShieldLockProps,
  {},
  { default: {} }
> {}
