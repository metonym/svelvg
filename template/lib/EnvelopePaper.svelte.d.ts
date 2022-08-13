/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopePaperProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopePaper extends SvelteComponentTyped<
  EnvelopePaperProps,
  {},
  { default: {} }
> {}
