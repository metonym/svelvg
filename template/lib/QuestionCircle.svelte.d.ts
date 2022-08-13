/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionCircle extends SvelteComponentTyped<
  QuestionCircleProps,
  {},
  { default: {} }
> {}
