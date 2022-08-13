/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cash extends SvelteComponentTyped<
  CashProps,
  {},
  { default: {} }
> {}
