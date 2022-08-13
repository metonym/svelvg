/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlarmFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AlarmFill extends SvelteComponentTyped<
  AlarmFillProps,
  {},
  { default: {} }
> {}
