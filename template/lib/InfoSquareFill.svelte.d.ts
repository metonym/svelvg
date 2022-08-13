/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InfoSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class InfoSquareFill extends SvelteComponentTyped<
  InfoSquareFillProps,
  {},
  { default: {} }
> {}
