/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KanbanFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class KanbanFill extends SvelteComponentTyped<
  KanbanFillProps,
  {},
  { default: {} }
> {}
