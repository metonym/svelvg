/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypePdfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypePdf extends SvelteComponentTyped<
  FiletypePdfProps,
  {},
  { default: {} }
> {}
