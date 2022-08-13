/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileXFill extends SvelteComponentTyped<
  FileXFillProps,
  {},
  { default: {} }
> {}
