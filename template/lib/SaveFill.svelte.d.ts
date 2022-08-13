/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SaveFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SaveFill extends SvelteComponentTyped<
  SaveFillProps,
  {},
  { default: {} }
> {}
