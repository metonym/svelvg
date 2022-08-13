/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PatchQuestionProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PatchQuestion extends SvelteComponentTyped<
  PatchQuestionProps,
  {},
  { default: {} }
> {}
