/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BankProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bank extends SvelteComponentTyped<
  BankProps,
  {},
  { default: {} }
> {}
