/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FolderFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FolderFill extends SvelteComponentTyped<
  FolderFillProps,
  {},
  { default: {} }
> {}
