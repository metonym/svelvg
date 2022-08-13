/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RecordFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RecordFill extends SvelteComponentTyped<
  RecordFillProps,
  {},
  { default: {} }
> {}
