/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cloud extends SvelteComponentTyped<
  CloudProps,
  {},
  { default: {} }
> {}
