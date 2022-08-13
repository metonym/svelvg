/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileWordFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileWordFill extends SvelteComponentTyped<
  FileWordFillProps,
  {},
  { default: {} }
> {}
