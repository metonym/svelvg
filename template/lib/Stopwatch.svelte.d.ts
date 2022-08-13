/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StopwatchProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Stopwatch extends SvelteComponentTyped<
  StopwatchProps,
  {},
  { default: {} }
> {}
