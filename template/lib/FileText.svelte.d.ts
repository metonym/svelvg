/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileText extends SvelteComponentTyped<
  FileTextProps,
  {},
  { default: {} }
> {}
