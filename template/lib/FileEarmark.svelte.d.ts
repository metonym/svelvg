/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmark extends SvelteComponentTyped<
  FileEarmarkProps,
  {},
  { default: {} }
> {}
