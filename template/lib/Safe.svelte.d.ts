/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SafeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Safe extends SvelteComponentTyped<
  SafeProps,
  {},
  { default: {} }
> {}
