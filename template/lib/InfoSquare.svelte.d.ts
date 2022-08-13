/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InfoSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class InfoSquare extends SvelteComponentTyped<
  InfoSquareProps,
  {},
  { default: {} }
> {}
