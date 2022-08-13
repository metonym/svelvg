/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileMinusFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileMinusFill extends SvelteComponentTyped<
  FileMinusFillProps,
  {},
  { default: {} }
> {}
