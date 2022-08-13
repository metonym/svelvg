/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InfoCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class InfoCircle extends SvelteComponentTyped<
  InfoCircleProps,
  {},
  { default: {} }
> {}
