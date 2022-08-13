/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BinocularsFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BinocularsFill extends SvelteComponentTyped<
  BinocularsFillProps,
  {},
  { default: {} }
> {}
