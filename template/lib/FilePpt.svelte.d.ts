/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePptProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePpt extends SvelteComponentTyped<
  FilePptProps,
  {},
  { default: {} }
> {}
