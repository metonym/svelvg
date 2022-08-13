/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileSpreadsheetProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileSpreadsheet extends SvelteComponentTyped<
  FileSpreadsheetProps,
  {},
  { default: {} }
> {}
