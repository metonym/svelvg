/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudyFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudyFill extends SvelteComponentTyped<
  CloudyFillProps,
  {},
  { default: {} }
> {}
