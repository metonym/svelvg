/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BugFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BugFill extends SvelteComponentTyped<
  BugFillProps,
  {},
  { default: {} }
> {}
