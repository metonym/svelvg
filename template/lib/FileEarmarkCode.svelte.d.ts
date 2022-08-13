/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkCodeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkCode extends SvelteComponentTyped<
  FileEarmarkCodeProps,
  {},
  { default: {} }
> {}
