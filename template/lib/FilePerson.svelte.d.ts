/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePersonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePerson extends SvelteComponentTyped<
  FilePersonProps,
  {},
  { default: {} }
> {}
