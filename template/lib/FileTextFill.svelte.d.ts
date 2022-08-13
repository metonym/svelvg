/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileTextFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileTextFill extends SvelteComponentTyped<
  FileTextFillProps,
  {},
  { default: {} }
> {}
