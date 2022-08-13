/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextareaResizeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TextareaResize extends SvelteComponentTyped<
  TextareaResizeProps,
  {},
  { default: {} }
> {}
