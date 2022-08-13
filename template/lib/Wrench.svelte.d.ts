/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WrenchProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Wrench extends SvelteComponentTyped<
  WrenchProps,
  {},
  { default: {} }
> {}
