/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UnityProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Unity extends SvelteComponentTyped<
  UnityProps,
  {},
  { default: {} }
> {}
