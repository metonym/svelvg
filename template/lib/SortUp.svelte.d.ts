/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SortUpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SortUp extends SvelteComponentTyped<
  SortUpProps,
  {},
  { default: {} }
> {}
