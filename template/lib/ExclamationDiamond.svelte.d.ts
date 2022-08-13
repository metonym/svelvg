/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExclamationDiamondProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ExclamationDiamond extends SvelteComponentTyped<
  ExclamationDiamondProps,
  {},
  { default: {} }
> {}
