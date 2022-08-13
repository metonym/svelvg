/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileZipProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileZip extends SvelteComponentTyped<
  FileZipProps,
  {},
  { default: {} }
> {}
