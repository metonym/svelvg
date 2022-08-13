/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePlayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePlay extends SvelteComponentTyped<
  FilePlayProps,
  {},
  { default: {} }
> {}
