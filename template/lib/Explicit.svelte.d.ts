/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExplicitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Explicit extends SvelteComponentTyped<
  ExplicitProps,
  {},
  { default: {} }
> {}
