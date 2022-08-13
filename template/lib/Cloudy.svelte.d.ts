/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cloudy extends SvelteComponentTyped<
  CloudyProps,
  {},
  { default: {} }
> {}
