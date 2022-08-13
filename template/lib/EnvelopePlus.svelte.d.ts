/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopePlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopePlus extends SvelteComponentTyped<
  EnvelopePlusProps,
  {},
  { default: {} }
> {}
