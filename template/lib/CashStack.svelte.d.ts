/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CashStackProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CashStack extends SvelteComponentTyped<
  CashStackProps,
  {},
  { default: {} }
> {}
