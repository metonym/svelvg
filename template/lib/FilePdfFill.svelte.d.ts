/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePdfFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePdfFill extends SvelteComponentTyped<
  FilePdfFillProps,
  {},
  { default: {} }
> {}
