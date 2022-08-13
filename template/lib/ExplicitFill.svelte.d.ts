/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExplicitFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ExplicitFill extends SvelteComponentTyped<
  ExplicitFillProps,
  {},
  { default: {} }
> {}
