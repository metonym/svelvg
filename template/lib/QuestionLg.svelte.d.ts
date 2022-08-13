/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionLgProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionLg extends SvelteComponentTyped<
  QuestionLgProps,
  {},
  { default: {} }
> {}
