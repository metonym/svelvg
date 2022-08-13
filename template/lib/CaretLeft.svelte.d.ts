/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CaretLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CaretLeft extends SvelteComponentTyped<
  CaretLeftProps,
  {},
  { default: {} }
> {}
