/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkImageFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkImageFill extends SvelteComponentTyped<
  FileEarmarkImageFillProps,
  {},
  { default: {} }
> {}
