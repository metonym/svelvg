/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileMusicProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileMusic extends SvelteComponentTyped<
  FileMusicProps,
  {},
  { default: {} }
> {}
