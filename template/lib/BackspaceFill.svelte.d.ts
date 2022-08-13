/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BackspaceFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BackspaceFill extends SvelteComponentTyped<
  BackspaceFillProps,
  {},
  { default: {} }
> {}
