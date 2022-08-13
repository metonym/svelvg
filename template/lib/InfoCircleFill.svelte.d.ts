/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InfoCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class InfoCircleFill extends SvelteComponentTyped<
  InfoCircleFillProps,
  {},
  { default: {} }
> {}
