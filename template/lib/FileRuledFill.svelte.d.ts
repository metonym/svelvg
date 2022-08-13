/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileRuledFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileRuledFill extends SvelteComponentTyped<
  FileRuledFillProps,
  {},
  { default: {} }
> {}
