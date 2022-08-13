/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileBarGraphProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileBarGraph extends SvelteComponentTyped<
  FileBarGraphProps,
  {},
  { default: {} }
> {}
