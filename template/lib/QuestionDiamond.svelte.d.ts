/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionDiamondProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionDiamond extends SvelteComponentTyped<
  QuestionDiamondProps,
  {},
  { default: {} }
> {}
