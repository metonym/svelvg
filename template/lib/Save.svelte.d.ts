/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SaveProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Save extends SvelteComponentTyped<
  SaveProps,
  {},
  { default: {} }
> {}
