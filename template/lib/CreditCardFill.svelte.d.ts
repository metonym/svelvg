/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CreditCardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CreditCardFill extends SvelteComponentTyped<
  CreditCardFillProps,
  {},
  { default: {} }
> {}
