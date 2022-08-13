/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeCsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeCs extends SvelteComponentTyped<
  FiletypeCsProps,
  {},
  { default: {} }
> {}
