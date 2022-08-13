/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RepeatProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Repeat extends SvelteComponentTyped<
  RepeatProps,
  {},
  { default: {} }
> {}
