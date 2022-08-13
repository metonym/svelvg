/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Git extends SvelteComponentTyped<
  GitProps,
  {},
  { default: {} }
> {}
