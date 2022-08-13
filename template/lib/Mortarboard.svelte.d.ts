/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MortarboardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Mortarboard extends SvelteComponentTyped<
  MortarboardProps,
  {},
  { default: {} }
> {}
