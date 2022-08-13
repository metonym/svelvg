/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeDashFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeDashFill extends SvelteComponentTyped<
  EnvelopeDashFillProps,
  {},
  { default: {} }
> {}
