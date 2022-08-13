/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionOctagonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionOctagon extends SvelteComponentTyped<
  QuestionOctagonProps,
  {},
  { default: {} }
> {}
