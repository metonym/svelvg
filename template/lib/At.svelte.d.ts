/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AtProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class At extends SvelteComponentTyped<
  AtProps,
  {},
  { default: {} }
> {}
