/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeMdProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeMd extends SvelteComponentTyped<
  FiletypeMdProps,
  {},
  { default: {} }
> {}
