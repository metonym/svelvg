/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkPersonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkPerson extends SvelteComponentTyped<
  FileEarmarkPersonProps,
  {},
  { default: {} }
> {}
