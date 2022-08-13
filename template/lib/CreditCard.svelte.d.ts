/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CreditCardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CreditCard extends SvelteComponentTyped<
  CreditCardProps,
  {},
  { default: {} }
> {}
