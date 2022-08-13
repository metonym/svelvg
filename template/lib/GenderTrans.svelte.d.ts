/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GenderTransProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GenderTrans extends SvelteComponentTyped<
  GenderTransProps,
  {},
  { default: {} }
> {}
