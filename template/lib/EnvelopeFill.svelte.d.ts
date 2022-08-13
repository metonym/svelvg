/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopeFill extends SvelteComponentTyped<
  EnvelopeFillProps,
  {},
  { default: {} }
> {}
