/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CaretUpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CaretUp extends SvelteComponentTyped<
  CaretUpProps,
  {},
  { default: {} }
> {}
