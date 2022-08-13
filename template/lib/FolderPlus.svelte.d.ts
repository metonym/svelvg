/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FolderPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FolderPlus extends SvelteComponentTyped<
  FolderPlusProps,
  {},
  { default: {} }
> {}
