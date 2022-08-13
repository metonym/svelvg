/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronUpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronUp extends SvelteComponentTyped<
  ChevronUpProps,
  {},
  { default: {} }
> {}
