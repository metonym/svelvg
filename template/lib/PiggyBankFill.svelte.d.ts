/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PiggyBankFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PiggyBankFill extends SvelteComponentTyped<
  PiggyBankFillProps,
  {},
  { default: {} }
> {}
