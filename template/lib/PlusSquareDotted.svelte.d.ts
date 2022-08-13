/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusSquareDottedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlusSquareDotted extends SvelteComponentTyped<
  PlusSquareDottedProps,
  {},
  { default: {} }
> {}
