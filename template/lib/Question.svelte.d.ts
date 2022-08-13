/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Question extends SvelteComponentTyped<
  QuestionProps,
  {},
  { default: {} }
> {}
