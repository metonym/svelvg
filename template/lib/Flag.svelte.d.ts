/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlagProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Flag extends SvelteComponentTyped<
  FlagProps,
  {},
  { default: {} }
> {}
