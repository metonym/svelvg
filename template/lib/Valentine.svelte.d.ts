/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ValentineProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Valentine extends SvelteComponentTyped<
  ValentineProps,
  {},
  { default: {} }
> {}
