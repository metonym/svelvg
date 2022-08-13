/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePersonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePersonFill extends SvelteComponentTyped<
  FilePersonFillProps,
  {},
  { default: {} }
> {}
