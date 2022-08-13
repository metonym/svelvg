/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileRuledProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileRuled extends SvelteComponentTyped<
  FileRuledProps,
  {},
  { default: {} }
> {}
