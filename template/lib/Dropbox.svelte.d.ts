/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropboxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Dropbox extends SvelteComponentTyped<
  DropboxProps,
  {},
  { default: {} }
> {}
