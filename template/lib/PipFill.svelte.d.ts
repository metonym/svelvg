/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PipFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PipFill extends SvelteComponentTyped<
  PipFillProps,
  {},
  { default: {} }
> {}
