/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CurrencyPoundProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CurrencyPound extends SvelteComponentTyped<
  CurrencyPoundProps,
  {},
  { default: {} }
> {}
