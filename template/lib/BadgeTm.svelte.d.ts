/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeTmProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeTm extends SvelteComponentTyped<
  BadgeTmProps,
  {},
  { default: {} }
> {}
