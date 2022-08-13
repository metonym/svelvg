/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileExcelProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileExcel extends SvelteComponentTyped<
  FileExcelProps,
  {},
  { default: {} }
> {}
