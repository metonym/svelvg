/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkCheck extends SvelteComponentTyped<
  FileEarmarkCheckProps,
  {},
  { default: {} }
> {}
