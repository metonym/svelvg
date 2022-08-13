/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AndroidProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Android extends SvelteComponentTyped<
  AndroidProps,
  {},
  { default: {} }
> {}
