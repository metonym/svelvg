/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionSquare extends SvelteComponentTyped<
  QuestionSquareProps,
  {},
  { default: {} }
> {}
