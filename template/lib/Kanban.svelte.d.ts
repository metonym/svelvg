/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KanbanProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Kanban extends SvelteComponentTyped<
  KanbanProps,
  {},
  { default: {} }
> {}
