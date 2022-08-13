/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopePaperFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopePaperFill extends SvelteComponentTyped<
  EnvelopePaperFillProps,
  {},
  { default: {} }
> {}
