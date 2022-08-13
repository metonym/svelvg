/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PiggyBankProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PiggyBank extends SvelteComponentTyped<
  PiggyBankProps,
  {},
  { default: {} }
> {}
