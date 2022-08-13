/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldShadedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShieldShaded extends SvelteComponentTyped<
  ShieldShadedProps,
  {},
  { default: {} }
> {}
