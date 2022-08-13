/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BodyTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BodyText extends SvelteComponentTyped<
  BodyTextProps,
  {},
  { default: {} }
> {}
