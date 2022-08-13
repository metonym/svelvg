/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CaretUpFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CaretUpFill extends SvelteComponentTyped<
  CaretUpFillProps,
  {},
  { default: {} }
> {}
