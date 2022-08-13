/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Check extends SvelteComponentTyped<
  CheckProps,
  {},
  { default: {} }
> {}
