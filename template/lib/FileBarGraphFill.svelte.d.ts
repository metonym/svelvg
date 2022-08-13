/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileBarGraphFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileBarGraphFill extends SvelteComponentTyped<
  FileBarGraphFillProps,
  {},
  { default: {} }
> {}
