/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileRichtextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileRichtext extends SvelteComponentTyped<
  FileRichtextProps,
  {},
  { default: {} }
> {}
