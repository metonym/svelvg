/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileSpreadsheetFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileSpreadsheetFill extends SvelteComponentTyped<
  FileSpreadsheetFillProps,
  {},
  { default: {} }
> {}
