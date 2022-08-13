/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeJsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeJs extends SvelteComponentTyped<
  FiletypeJsProps,
  {},
  { default: {} }
> {}
