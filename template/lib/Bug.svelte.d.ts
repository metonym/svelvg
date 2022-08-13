/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BugProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bug extends SvelteComponentTyped<
  BugProps,
  {},
  { default: {} }
> {}
