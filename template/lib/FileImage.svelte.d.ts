/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileImageProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileImage extends SvelteComponentTyped<
  FileImageProps,
  {},
  { default: {} }
> {}
