/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextareaTProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TextareaT extends SvelteComponentTyped<
  TextareaTProps,
  {},
  { default: {} }
> {}
