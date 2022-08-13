/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePlus extends SvelteComponentTyped<
  FilePlusProps,
  {},
  { default: {} }
> {}
