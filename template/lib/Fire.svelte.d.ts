/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FireProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Fire extends SvelteComponentTyped<
  FireProps,
  {},
  { default: {} }
> {}
