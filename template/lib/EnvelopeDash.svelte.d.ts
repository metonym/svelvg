/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeDash extends SvelteComponentTyped<
  EnvelopeDashProps,
  {},
  { default: {} }
> {}
