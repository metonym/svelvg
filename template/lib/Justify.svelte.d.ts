/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JustifyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Justify extends SvelteComponentTyped<
  JustifyProps,
  {},
  { default: {} }
> {}
