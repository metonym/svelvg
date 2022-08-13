/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkImageProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkImage extends SvelteComponentTyped<
  FileEarmarkImageProps,
  {},
  { default: {} }
> {}
