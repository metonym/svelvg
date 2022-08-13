/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeCsvProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeCsv extends SvelteComponentTyped<
  FiletypeCsvProps,
  {},
  { default: {} }
> {}
