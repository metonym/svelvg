/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextareaProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Textarea extends SvelteComponentTyped<
  TextareaProps,
  {},
  { default: {} }
> {}
