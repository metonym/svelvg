/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Clouds extends SvelteComponentTyped<
  CloudsProps,
  {},
  { default: {} }
> {}
