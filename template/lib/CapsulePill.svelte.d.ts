/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CapsulePillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CapsulePill extends SvelteComponentTyped<
  CapsulePillProps,
  {},
  { default: {} }
> {}
