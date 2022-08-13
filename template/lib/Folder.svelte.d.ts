/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FolderProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Folder extends SvelteComponentTyped<
  FolderProps,
  {},
  { default: {} }
> {}
