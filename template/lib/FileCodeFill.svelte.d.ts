/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileCodeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileCodeFill extends SvelteComponentTyped<
  FileCodeFillProps,
  {},
  { default: {} }
> {}
