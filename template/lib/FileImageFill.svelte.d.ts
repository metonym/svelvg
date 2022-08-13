/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileImageFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileImageFill extends SvelteComponentTyped<
  FileImageFillProps,
  {},
  { default: {} }
> {}
