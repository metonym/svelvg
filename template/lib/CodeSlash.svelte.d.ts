/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CodeSlashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CodeSlash extends SvelteComponentTyped<
  CodeSlashProps,
  {},
  { default: {} }
> {}
