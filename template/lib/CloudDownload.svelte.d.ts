/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudDownloadProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudDownload extends SvelteComponentTyped<
  CloudDownloadProps,
  {},
  { default: {} }
> {}
