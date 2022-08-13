/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BoxFill extends SvelteComponentTyped<
  BoxFillProps,
  {},
  { default: {} }
> {}
