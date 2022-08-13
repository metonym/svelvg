/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UploadProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Upload extends SvelteComponentTyped<
  UploadProps,
  {},
  { default: {} }
> {}
