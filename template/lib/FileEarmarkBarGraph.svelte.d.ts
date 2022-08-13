/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkBarGraphProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkBarGraph extends SvelteComponentTyped<
  FileEarmarkBarGraphProps,
  {},
  { default: {} }
> {}
