/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileMinusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileMinus extends SvelteComponentTyped<
  FileMinusProps,
  {},
  { default: {} }
> {}
