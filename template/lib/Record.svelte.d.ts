/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RecordProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Record extends SvelteComponentTyped<
  RecordProps,
  {},
  { default: {} }
> {}
