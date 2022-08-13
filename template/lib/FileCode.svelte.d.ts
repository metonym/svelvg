/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileCodeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileCode extends SvelteComponentTyped<
  FileCodeProps,
  {},
  { default: {} }
> {}
