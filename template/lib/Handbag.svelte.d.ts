/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HandbagProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Handbag extends SvelteComponentTyped<
  HandbagProps,
  {},
  { default: {} }
> {}
