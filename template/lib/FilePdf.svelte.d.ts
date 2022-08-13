/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePdfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePdf extends SvelteComponentTyped<
  FilePdfProps,
  {},
  { default: {} }
> {}
