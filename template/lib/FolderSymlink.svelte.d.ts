/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FolderSymlinkProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FolderSymlink extends SvelteComponentTyped<
  FolderSymlinkProps,
  {},
  { default: {} }
> {}
