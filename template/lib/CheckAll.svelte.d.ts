/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CheckAllProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CheckAll extends SvelteComponentTyped<
  CheckAllProps,
  {},
  { default: {} }
> {}
