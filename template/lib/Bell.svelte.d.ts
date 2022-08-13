/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BellProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bell extends SvelteComponentTyped<
  BellProps,
  {},
  { default: {} }
> {}
