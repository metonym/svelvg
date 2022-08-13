/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionDiamondFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionDiamondFill extends SvelteComponentTyped<
  QuestionDiamondFillProps,
  {},
  { default: {} }
> {}
