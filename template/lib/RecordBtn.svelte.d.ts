/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RecordBtnProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RecordBtn extends SvelteComponentTyped<
  RecordBtnProps,
  {},
  { default: {} }
> {}
