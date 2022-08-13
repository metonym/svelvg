/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WatchProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Watch extends SvelteComponentTyped<
  WatchProps,
  {},
  { default: {} }
> {}
