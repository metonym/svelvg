/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FacebookProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Facebook extends SvelteComponentTyped<
  FacebookProps,
  {},
  { default: {} }
> {}
