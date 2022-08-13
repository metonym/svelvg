/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DownloadProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Download extends SvelteComponentTyped<
  DownloadProps,
  {},
  { default: {} }
> {}
