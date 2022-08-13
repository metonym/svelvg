/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileCheck extends SvelteComponentTyped<
  FileCheckProps,
  {},
  { default: {} }
> {}
