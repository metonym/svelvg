/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BracesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Braces extends SvelteComponentTyped<
  BracesProps,
  {},
  { default: {} }
> {}
