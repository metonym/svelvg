/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuestionCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class QuestionCircleFill extends SvelteComponentTyped<
  QuestionCircleFillProps,
  {},
  { default: {} }
> {}
