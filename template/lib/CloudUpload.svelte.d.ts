/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudUploadProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudUpload extends SvelteComponentTyped<
  CloudUploadProps,
  {},
  { default: {} }
> {}
