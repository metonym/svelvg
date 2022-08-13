/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DpadFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DpadFill extends SvelteComponentTyped<
  DpadFillProps,
  {},
  { default: {} }
> {}
