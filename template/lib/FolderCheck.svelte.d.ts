/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FolderCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FolderCheck extends SvelteComponentTyped<
  FolderCheckProps,
  {},
  { default: {} }
> {}
