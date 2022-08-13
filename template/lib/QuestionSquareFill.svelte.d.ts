/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionSquareFill extends SvelteComponentTyped<
  QuestionSquareFillProps,
  {},
  { default: {} }
> {}
